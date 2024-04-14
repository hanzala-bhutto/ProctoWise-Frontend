import { createSlice, current } from "@reduxjs/toolkit";
import { RootState } from './store';
const initialState : Submission = {
    eventID: '',
    participantID: '',
    attemptedTasks: []
}

interface Submission {
    eventID: string;
    participantID: string;
    attemptedTasks: AttemptedTask[]
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

                if (state.attemptedTasks.length > 0) {
                    console.log(current(state.attemptedTasks));

                    const taskIndex = state.attemptedTasks.findIndex((task) => task.taskID === payload.taskID);

                    console.log(taskIndex,payload);
    
                    if (taskIndex == -1){
                        state.attemptedTasks.push(payload);
                    }
                    else{
                        state.attemptedTasks[taskIndex].code = payload.code;
                        state.attemptedTasks[taskIndex].language = payload.language;
                    }
                }
                else{
                    state.attemptedTasks.push(payload);
                    // console.log(current(state.attemptedTasks));
                }

            },
        }


    }
)

export const {setSubmission,addAttemptedTask} = submissionSlice.actions;
export const selectSubmissionSlice = (state: RootState) => state.submission;
export default submissionSlice.reducer;