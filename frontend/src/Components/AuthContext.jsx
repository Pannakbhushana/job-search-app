import { createContext,useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [state, setState]=useState(false);

    const LoginFromAuth=()=>{
        setState(true);
    }

    const logoutFromAuth=()=>{
        setState(false);
    }

    return <AuthContext.Provider value={{state,LoginFromAuth,logoutFromAuth}}>{children}</AuthContext.Provider>
}