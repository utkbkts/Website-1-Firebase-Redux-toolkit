import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import kullaniciservice from "./Googleservice"


const kullanici = JSON.parse(localStorage.getItem("kullanici"))
const initialState={
    kullanici:kullanici?kullanici:null,
    message:"",
    İsError:false,
    İsSuccess:false,
    İsLoading:false,
}

export const logingoogle=createAsyncThunk("kullanici/logingoogle",async(veri,thunkAPI)=>{
    try {
        return await kullaniciservice.googlelogin()
    } catch (error) {
        const message = error.message
       return thunkAPI.rejectWithValue(message)
    }
})

export const kullaniciSlice=createSlice({
    name:"kullaniciSlice",
    initialState,
    reducers:{
        reset:(state)=>{
            state.kullanici=null
            state.message=""
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(logingoogle.pending,(state)=>{
            state.İsLoading=true
        })
        .addCase(logingoogle.fulfilled,(state,action)=>{
            state.kullanici=action.payload
            state.İsSuccess=true
            state.İsLoading=false
        })
        .addCase(logingoogle.rejected,(state,action)=>{
            state.message=action.payload
            state.kullanici=null
            state.İsError=false
            state.İsLoading=false
        })
    }
})

export const {reset}=kullaniciSlice.actions
export default kullaniciSlice.reducer