import { createSlice } from "@reduxjs/toolkit";
import { RootState } from './store';
const initialState = {

    eventID: '65bd021828009d95442c7cb7',
}

const taskSlice = createSlice(
    {
        name: "tasks",
        initialState,
        reducers:{
            setEventID:(state, {payload}) => {
                // console.log(payload);
                state.eventID=payload.eventID;
                // console.log(state.eventID);
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