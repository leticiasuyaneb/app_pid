import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
const {Navigator,Screen} = createStackNavigator();
export  function AuthRoutes(){
    return (
        <Navigator>
            <Screen
            name="login"
            component={Login}/>
        </Navigator>
    );
}
