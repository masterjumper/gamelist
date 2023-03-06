import React from 'react'
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import Home from '../screens/HomeScreen
import Profile from '../screens/ProfileScreen'
import Messages from '../screens/MessagesScreen'
import Settings from '../screens/SettingsScreen'
import Moments from '../screens/MomentsScreen'
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './TabNavigator';
const Drawer = createDrawerNavigator();


const AppStack = () => {
  return (    
    <Drawer.Navigator 
      drawerContent={props=><CustomDrawer {...props} />} 
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          //fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}
      >
    <Drawer.Screen 
          name="Home" 
          component={TabNavigator} 
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Messages" 
          component={Messages} 
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Moments" 
          component={Moments}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="timer-outline" size={22} color={color} />
            ),
          }} 
        />
        <Drawer.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="settings-outline" size={22} color={color} />
            ),
          }}
        />
    </Drawer.Navigator> 
  )
}

export default AppStack

