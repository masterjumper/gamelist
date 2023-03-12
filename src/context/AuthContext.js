import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react'
import { BASE_URL } from '../../config';
export default AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [isLoading, setIsLoading]= useState(false)
    const [userToken, setUserToken]= useState(null)
    const [userInfo, setUserInfo]=useState(null)

    const login =(username, password)=>{        
        setIsLoading(true)
        //axios.post(`${BASE_URL}/jwt-auth/v1/token`,{
        axios.post(`${BASE_URL}/login`,{
            username: username, 
            password: password 
        })
        .then(res=>{

            let userInfoNow = res.data            
            setUserToken(userInfoNow.accessToken) 
            setUserInfo(userInfoNow.user)           
            AsyncStorage.setItem('userToken', userInfoNow.accessToken)    
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfoNow.user)) 
        })
        .catch(e=>{
            
        })

             
        setIsLoading(false)
    }

    const logout =()=>{
        setUserToken(null)
        setIsLoading(true)
        AsyncStorage.removeItem('userToken')
        AsyncStorage.removeItem('userInfo')
        setIsLoading(false)
    }

    const isLoggedIn = async() =>{
        try{
            setIsLoading(true)
            let userToken = await AsyncStorage.getItem('userToken')
            let userInfo = await AsyncStorage.getItem('userInfo')
            userInfo = JSON.stringify(userInfo)
            if(userInfo){
                setUserToken(userToken)    
                setUserInfo(userInfo)        
            }
            
            setIsLoading(false)
        }catch(e){
            console.log( 'isLogged in error')
        }
    }    

    useEffect(()=>{
        isLoggedIn()
    },[])
    return(
        <AuthContext.Provider value={{login, logout, isLoading, userToken, userInfo}}>
            {children}
        </AuthContext.Provider>
    );
}
