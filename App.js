import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login';
import Signup from './screens/Signup';


export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    
    <NavigationContainer>
      <StatusBar style='auto'/>
      
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

        </Stack.Navigator>
      
    </NavigationContainer>
  
  );
}
