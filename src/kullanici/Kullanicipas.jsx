import React, { useState } from 'react'
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from '../firebase/config';
import { toast } from 'react-toastify';
const Kullanicipas = () => {
  const [email, setemail] = useState("");

  const handlereset=(e)=>{
    e.preventDefault()

    sendPasswordResetEmail(auth,email)
    .then(()=>{
      toast.success("Email Hesabınızı Kontrol Ediniz.")
    }).catch((error)=>{
      toast.error(error.message)
    })
  }

  
  return (
    <div className='kullanicipas'>
        <form action="#" onSubmit={handlereset}>
            <h2 style={{textAlign:"center",color:"white"}}>Reset</h2>
           <div className='kullanicipas-placeholder'>
           <input value={email} onChange={(e)=>setemail(e.target.value)} type="text" placeholder='' name="" id="" />
            <label htmlFor="#">Email</label>
           </div>
           <div className='buttonkullanici'>
            <button type='submit'>Parola Sıfırla</button>
           </div>
        </form>
    </div>
  )
}

export default Kullanicipas