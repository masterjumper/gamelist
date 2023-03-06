import React from "react";
import Home from '../screens/HomeScreen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cart from '../screens/CartScreen';
import Favorite from '../screens/FavoriteScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GameDetails"
          component={GameDetailsScreen}
          options={({route}) => ({
            title: route.params?.title,
            subtitle:route.params?.subtitle,
          })}
        />
      </Stack.Navigator>
    );
  };

const getTabBarVisibility = route => {
    // console.log(route);
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    // console.log(routeName);

    if( routeName == 'GameDetails' ) {
        return 'none';
    }
    return 'flex';
};


const TabNavigator = () => {
    return (
        <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {backgroundColor: '#AD40AF'},
            tabBarInactiveTintColor: '#fff',
            tabBarActiveTintColor: 'yellow',
          }}>
            <Tab.Screen 
                name="Home2"
                component={HomeStack}
                options={({route}) => ({
                tabBarStyle: {
                    display: getTabBarVisibility(route),
                    backgroundColor: '#AD40AF',
                },
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home-outline" color={color} size={size} />
                ),
                })}
            />
            <Tab.Screen 
                name="Cart" 
                component={Cart} 
                options={{
                    tabBarBadge: 3,
                    tabBarBadgeStyle: {backgroundColor: 'yellow'},
                    tabBarIcon: ({color, size}) => (
                    <Feather name="shopping-bag" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Favorite"
                component={Favorite}
                options={{
                    tabBarIcon: ({color, size}) => (
                      <Ionicons name="heart-outline" color={color} size={size} />
                    ),
                  }} 
            />
        </Tab.Navigator>    
    );
}
 
export default TabNavigator;