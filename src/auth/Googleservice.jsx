import { auth } from "../firebase/config";
import {signInWithPopup,GoogleAuthProvider} from "firebase/auth"


const googlelogin=async()=>{
    const provider=new GoogleAuthProvider()
    try {
        const result = await signInWithPopup(auth,provider)
        localStorage.setItem("kullanici",JSON.stringify(result.user))
        return result.user
    } catch (error) {
        throw Error(error.message)
    }
}
const kullaniciservice={
    googlelogin
}

export default kullaniciservice