import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';


interface taskState {
   
    description: string
}

const initialState: taskState = {
    description:
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setAuth: (state, { payload }) => {
            
            // // eslint-disable-next-line no-console
            // console.log(payload);
            state.jwtToken = payload.jwt;
            state.user = payload.user;
            state.isAuthenticated = true;
        }
    },
    
})

// export const {} = authSlice.actions;

export const { setAuth } = authSlice.actions;
export const selectAuthSlice = (state: RootState) => state.auth;
export default authSlice.reducer;