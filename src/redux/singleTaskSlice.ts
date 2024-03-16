import { createSlice } from "@reduxjs/toolkit";
import { RootState } from './store';
const initialState = {

    taskID: '65f417f0b3b1c2ed0ee473ae',
}

const singleTaskSlice = createSlice(
    {
        name: "task",
        initialState,
        reducers:{
            setTaskID:(state, {payload}) => {
                // console.log(payload);
                state.taskID=payload.taskID;
            },
            deleteTaskID:(state)=>{
                state.taskID='';
            }
        }


    }
)

export const {setTaskID, deleteTaskID} = singleTaskSlice.actions;
export const selectSingleTaskSlice = (state: RootState) => state.task;
export default singleTaskSlice.reducer;