import { createSlice } from "@reduxjs/toolkit";

const LanguageChange=createSlice({
    initialState:{
        language:'en',
        isRTL:false
    },
    name:'language',
    reducers:{
        setLangauge:(state,action)=>{
            state.language=action.payload
            state.isRTL=action.payload=='ar'
        }
    }
})

export const {setLangauge}=LanguageChange.actions
export default LanguageChange.reducer
