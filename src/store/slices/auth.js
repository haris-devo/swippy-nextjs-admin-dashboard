import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isLogin:false,
    role:'',
    name:"",
    email:'',
    settings:''
}
const authSlice=createSlice({
        initialState,
        name:'auth',
        reducers:{
            setAuthData:(state,action)=>{
                state.isLogin=action.payload.isLogin,
                state.role=action.payload.role,
                state.name=action.payload.name,
                state.email=action.payload.email,
                state.settings=action.payload.settings
         
            }
        }
})

export const {setAuthData}=authSlice.actions
export default authSlice.reducer