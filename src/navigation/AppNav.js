import { View, Text, ActivityIndicator } from 'react-native'
import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import AuthContext from '../context/AuthContext';


const AppNav = () => {
  const {isLoading, userToken} = useContext(AuthContext)
  
  if(isLoading){
    <View>
        <ActivityIndicator  />
    </View>

  }

  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default AppNav