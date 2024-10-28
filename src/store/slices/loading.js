import { createSlice } from "@reduxjs/toolkit";
const initialState={
   isLoading:false
}
const loadingSlice=createSlice({
        initialState,
        name:'loading',
        reducers:{
            setLoading:(state,action)=>{
                state.isLoading=action.payload.isLoading
            }
        }
})

export const {setLoading}=loadingSlice.actions
export default loadingSlice.reducer