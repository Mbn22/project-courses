import { createContext, useContext, useState } from "react";

const AuthContext  = createContext(null)
export const AuthProvider = ({children})=>{
    const [user , setuser] = useState(null)
    const [email , setemail] = useState(null)
    const [pasword , setpasword] = useState(null)

   const login = user => {setuser(user)}
   const logout =()=>{setuser(null)}


   return (<AuthContext.Provider valuse={user}> {children}</AuthContext.Provider>)
}
export const useAuth =() => {
    return useContext(AuthContext)
}