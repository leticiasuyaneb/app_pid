import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import Login from '../screens/Login';
import Register from '../screens/Register';
import TermsUse from '../screens/TermsUse';
import MyPassword from '../screens/MyPassword';
import AppTabNav from './app.tab.routes';
import EditProfile from '../screens/EditProfile';



const {Navigator, Screen} = createStackNavigator();
export  function AppRoutes() {



  return (
    <Navigator>
      <Screen name="Login" component={Login}
      options={{headerShown:false}}/>

      <Screen name="Register" component={Register}
      options={{headerShown:false}}/>
      <Screen name="TermsUse" component={TermsUse}
      options={{headerShown:false}}/>
      <Screen name="AppTabNav" component={AppTabNav}
      options={{headerShown:false}}/>
      <Screen name="MyPassword" component={MyPassword}
      options={{headerShown:false}}/>
      <Screen name="EditProfile" component={EditProfile}
      options={{headerShown:false}}/>
    </Navigator>
  );
}
