import { createSlice, current } from "@reduxjs/toolkit";
import { RootState } from './store';
const initialState : Submission = {
    eventID: '',
    participantID: '',
    attemtedTasks: []
}

interface Submission {
    eventID: string;
    participantID: string;
    attemtedTasks: AttemptedTask[]
}

interface AttemptedTask {
    taskID: string;
    code: string;
    language: string;
}

const submissionSlice = createSlice(
    {
        name: "submission",
        initialState,
        reducers:{
            setSubmission: (state, {payload}) => {
                console.log(current(state));

                state.eventID = payload.eventID;
                state.participantID = payload.participantID;
                // console.log(state.eventID, state.participantID);
            },
            addAttemptedTask: (state, {payload}) => {

                if (state.attemtedTasks.length > 0) {
                    console.log(current(state.attemtedTasks));

                    const taskIndex = state.attemtedTasks.findIndex((task) => task.taskID === payload.taskID);

                    console.log(taskIndex,payload);
    
                    if (taskIndex == -1){
                        state.attemtedTasks.push(payload);
                    }
                    else{
                        state.attemtedTasks[taskIndex].code = payload.code;
                        state.attemtedTasks[taskIndex].language = payload.language;
                    }
                }
                else{
                    state.attemtedTasks.push(payload);
                    console.log(current(state.attemtedTasks));
                }

            },
        }


    }
)

export const {setSubmission,addAttemptedTask} = submissionSlice.actions;
export const selectSubmissionSlice = (state: RootState) => state.submission;
export default submissionSlice.reducer;