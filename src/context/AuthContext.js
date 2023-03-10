import React, {createContext, useState} from 'react'

export default AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [isLoading, setIsLoading]= useState(true)
    const [userToken, setUserToken]= useState(null)

    const login =()=>{
        setUserToken('ioiojlkad')
        setIsLoading(false)
    }

    const logout =()=>{
        setUserToken(null)
        setIsLoading(false)
    }

    return(
        <AuthContext.Provider value={{login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}
