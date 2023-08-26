import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import AuthReducer from "./auth/Authslice"
export const store = configureStore({
    reducer:{
        auth:AuthReducer,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:false
    })
})