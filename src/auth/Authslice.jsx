import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import authservice from "./Authservice.jsx"

const user = JSON.parse(localStorage.getItem("user"))
const initialState={
    user:user ? user:null,
    yonetici:null,
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:"",
}

//KAYIT İŞLEMİ
export const register = createAsyncThunk("auth/register",async(user,thunkAPI)=>{
    try {
        return await authservice.register(user.email,user.password,user.displayName)
    } catch (error) {
        const message = error.message
        return thunkAPI.rejectWithValue(message)
    }
})

//Giriş işlemi

export const login = createAsyncThunk("auth/login",async(user,thunkAPI)=>{
    try {
        return await authservice.login(user.email,user.password) 
    } catch (error) {
        const message = error.message
      return  thunkAPI.rejectWithValue(message)
    }
})


export const logout = createAsyncThunk("auth/logout",async(_,thunkAPI)=>{
    try {
      await authservice.logout()
    } catch (error) {
      const message = error.message
      return thunkAPI.rejectWithValue(message)
    }
  })

  export const Authslice = createSlice({
    name:"Authslice",
    initialState,
    reducers:{
        reset:(state)=>{
            state.isError=false;
            state.isLoading=false;
            state.isSuccess=false;
            state.message="";
        }
    },
    extraReducers:(builder)=>{
        builder
        //kayıt işlemi
        .addCase(register.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
          })
          .addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
          })
          //LOGİN
          .addCase(login.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
          })
          .addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
          })

          //logout
          .addCase(logout.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(logout.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = null;
          })
          .addCase(logout.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
          })
         
    }
  })
  export const { reset } = Authslice.actions;
  export default Authslice.reducer;