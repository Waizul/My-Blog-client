import firebaseAuthentication from "../firebase/firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import axios from 'axios'

firebaseAuthentication()

const useFirebase = () => {
const [user,setUser] = useState(null);
const [newUser,setNewUser] = useState({})
const [error,setError] = useState('')    

const auth = getAuth();
const googleProvider = new GoogleAuthProvider()

const login=()=>{
     signInWithPopup(auth, googleProvider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const loggedUser = result.user;
    setUser(loggedUser)
      const newLoggedUser={
    displayName:loggedUser.displayName,
    email:loggedUser.email,
    photoURL:loggedUser?.photoURL
    }
    console.log(newLoggedUser);
    setNewUser(newLoggedUser)
   
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    setError(error.message,error.email)
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })};

useEffect(()=>{
  const unsubscribed = 
    onAuthStateChanged(auth,(user)=>{
      if (user) {
        setUser(user)
      }else{
        setUser({})
      }
    })
  
  return ()=>unsubscribed
},[auth])

useEffect(()=>{
 
    console.log(newUser);
  const saveUser = async()=>{
    const res = await axios.post('http://localhost:1000/auth/register',newUser)
    // setUser(res.data)
  }
  saveUser()
  const getUser = async()=>{
    const res = await axios.get(`http://localhost:1000/users`)
    console.log(res.data);
  }
  getUser()
},[newUser])

const logout = () =>{
    signOut(auth).then(() => {
      setUser({})
  // Sign-out successful.
}).catch((error) => {
  setError(error)
})
}

  return {user,error,login,logout}
};

export default useFirebase;
