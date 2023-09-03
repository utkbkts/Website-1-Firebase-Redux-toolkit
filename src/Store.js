import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import AuthReducer from "./auth/Authslice"
import KullaniciReducer from "./auth/Googleslice.jsx"
export const store = configureStore({
    reducer:{
        auth:AuthReducer,
        kullaniciState:KullaniciReducer,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:false
    })
})