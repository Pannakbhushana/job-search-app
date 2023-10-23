import { createContext,useState } from "react";

export const EmployerAuthContext=createContext();

export const EmployerAuthContextProvider=({children})=>{
    const [Employstate, setState]=useState(false);

    const EmployerLogin=()=>{
        setState(true);
    }

    const EmployerLogout=()=>{
        setState(false);
    }

    return <EmployerAuthContext.Provider value={{Employstate,EmployerLogin,EmployerLogout}}>{children}</EmployerAuthContext.Provider>
}