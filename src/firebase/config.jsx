
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "Your-KEY",
  authDomain: "mywebsite-a00ae.firebaseapp.com",
  databaseURL: "https://mywebsite-a00ae-default-rtdb.firebaseio.com",
  projectId: "mywebsite-a00ae",
  storageBucket: "mywebsite-a00ae.appspot.com",
  messagingSenderId: "705152443920",
  appId: "1:705152443920:web:c8b6fc063f340cceb68c95",
  measurementId: "G-YRZ2TJCYD0"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const db = getFirestore(app)
  const storage= getStorage(app)
  export {
    auth,
    db,
    storage
  }
