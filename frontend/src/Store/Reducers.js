import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    status : false, // to check login status
    userData: null
}

const Reducers =createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout:(state)=>{
            state.status = false;
            state.userData = null;
        }
    }
}
)

export const {login, logout} = Reducers.actions;

export default Reducers.reducer;