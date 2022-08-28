import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './Screens/Home'
import Login from './Screens/Login';
import Signup from './Screens/SignUp';
import CreatePost from './Screens/CreatePost';
import EditPost from './Screens/EditPost';
import UserPost from './Screens/UserPost';
import ResetPassword from './Screens/ResetPassword';
import ForgotPassword from './Screens/ForgotPassword';


export default function App({navigation}) {
  const Stack = createNativeStackNavigator()
  
  return (
    <React.Fragment>
      <StatusBar style='auto'/>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
        headerTitle : 'Home',
        headerStyle : {backgroundColor:'#f4511e'},
        headerTintColor : '#fff',
        headerTitleStyle : {fontWeight:'bold'}
      }}/>
      <Stack.Screen name="Login" component={Login} options={{
        headerTitle : 'Login',
        headerStyle : {backgroundColor:'#f4511e'},
        headerTintColor : '#fff',
        headerTitleStyle : {fontWeight:'bold'}
      }}/>
      <Stack.Screen name="Signup" component={Signup} options={{
        headerTitle : 'Signup',
        headerStyle : {backgroundColor:'#f4511e'},
        headerTintColor : '#fff',
        headerTitleStyle : {fontWeight:'bold'}
      }}/>
      <Stack.Screen name="CreatePost" component={CreatePost} options={{
        headerTitle : 'CreatePost',
        headerStyle : {backgroundColor:'#f4511e'},
        headerTintColor : '#fff',
        headerTitleStyle : {fontWeight:'bold'}
      }}/>
      <Stack.Screen name="EditPost" component={EditPost} options={{
        headerTitle : 'EditPost',
        headerStyle : {backgroundColor:'#f4511e'},
        headerTintColor : '#fff',
        headerTitleStyle : {fontWeight:'bold'}
      }}/>
     <Stack.Screen name="UserPost" component={UserPost} options={{
        headerTitle : 'UserPost',
        headerStyle : {backgroundColor:'#f4511e'},
        headerTintColor : '#fff',
        headerTitleStyle : {fontWeight:'bold'}   
      }}/>
      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{
        headerTitle : 'ResetPassword',
        headerStyle : {backgroundColor:'#f4511e'},
        headerTintColor : '#fff',
        headerTitleStyle : {fontWeight:'bold'}
      }}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
        headerTitle : 'ForgotPassword',
        headerStyle : {backgroundColor:'#f4511e'},
        headerTintColor : '#fff',
        headerTitleStyle : {fontWeight:'bold'}
      }}/>
      </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}
