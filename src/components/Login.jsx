import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { login,reset } from '../auth/Authslice'
import { toast } from "react-toastify"
import Transition from './Transition'
const Login = () => {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user,isLoading,message,isSuccess,isError}=useSelector((state)=>state.auth)
  const handlesubmit=(e)=>{
    e.preventDefault()

    const userdata={
      email,
      password
    }
    dispatch(login(userdata))
  }
  useEffect(()=>{

    if(isError){
      toast.error('Bir hata oluştu');
    }

    if(isSuccess || user){
      navigate("/")
    }
    if(isLoading === false){
      dispatch(reset())
    }
  },[user,isLoading,isError,isSuccess,message,navigate,dispatch])
  return (
  <div className='login-box'>
          <h2>Giriş Sayfası</h2>
      <form onSubmit={handlesubmit}>
      <div class="user-box">
      <input value={email} onChange={(e)=>setemail(e.target.value)} type="text" name="" required=""/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" name="" required=""/>
      <label>Parola</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button className='buttons' type='submit'>Giriş Yap</button>
    </a>
    </form>
  </div>
  )
}

export default Transition(Login)