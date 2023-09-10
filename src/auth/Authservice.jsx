import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,signOut} from "firebase/auth"
import { auth, db, storage  } from "../firebase/config"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"


const register=async(email,password,name,thumbnail)=>{
    const userResponse = await createUserWithEmailAndPassword(auth,email,password)

    if(userResponse.user){
        await updateProfile(userResponse.user,{
            displayName:name,
            photoURL:photoURL,
        })

        localStorage.setItem("user",JSON.stringify(userResponse.user))
    }

 
}
const login = async (email,password)=>{
    const userresponse = await signInWithEmailAndPassword(auth,email,password);
    if(userresponse.user){
        localStorage.setItem("user",JSON.stringify(userresponse.user))
    }

    return userresponse.user
}


const logout=async()=>{
    await signOut(auth)
    localStorage.removeItem("user")
    localStorage.removeItem("kullanici")
}

const authservice={
    register,
    login,
    logout,

}

export default authservice