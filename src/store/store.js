import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth";
import loadingSlice from './slices/loading'
import  LanguageChange  from "./slices/language";

export const store=configureStore({
    reducer:{
        auth:authSlice,
        loading:loadingSlice,
        language:LanguageChange
    }
})
