import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext()

const AuthProvider = ({children})=>{
    const userCredentials = useFirebase()
    
return(
    <AuthContext.Provider value={userCredentials}>
        {children}
    </AuthContext.Provider>
)
}

export default AuthProvider