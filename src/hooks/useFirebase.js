import firebaseAuthentication from "../firebase/firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseAuthentication()

const useFirebase = () => {
const [user,setUser] = useState(null)
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
    console.log(loggedUser);
   
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
