import {auth} from "../firebase/config"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,signOut} from "firebase/auth"

const register=async(email,password,name)=>{
    const userResponse = await createUserWithEmailAndPassword(auth,email,password)

    if(userResponse.user){
        await updateProfile(userResponse.user,{
            displayName:name
        })

        localStorage.setItem("user",JSON.stringify(userResponse.user))
    }
    return userResponse.user
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
}

const authservice={
    register,
    login,
    logout
}

export default authservice