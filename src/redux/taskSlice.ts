import { createSlice } from "@reduxjs/toolkit";
import { RootState } from './store';
const initialState = {

    eventID: 'yoyo',
}

const taskSlice = createSlice(
    {
        name: "tasks",
        initialState,
        reducers:{
            setEventID:(state, {payload}) => {
                // console.log(payload);
                state.eventID=payload.eventID;
            },
            deleteEventID:(state)=>{
                state.eventID='';
            }
        }


    }
)

export const {setEventID, deleteEventID} = taskSlice.actions;
export const selectTaskSlice = (state: RootState) => state.tasks;
export default taskSlice.reducer;