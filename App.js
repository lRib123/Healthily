import React, {useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Page1 from './components/AssetExample'
import Breakfast from './components/Breakfast';
import SignUp from './components/SignUp'
import Lunch from './components/Lunch'
import Dinner from './components/Dinner'
import Settings from './components/Settings'
import Login from './components/Login'
import Test from './components/Test'
import Password from './components/Password'
import Healthily from './components/Healthily'
import Index from './components/Index'
import Calorie from './components/Calories'
import Protein from './components/Protein'


const App =()=>{

  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
      <Stack.Screen name = "Healthily" component={Healthily}/>
      <Stack.Screen name = "Settings" component={Settings}/>
      <Stack.Screen name = "Calorie" component={Calorie}/> 
      <Stack.Screen name = "Protein" component={Protein}/> 
      <Stack.Screen name = "Index" component={Index}/> 
      <Stack.Screen name = "Dinner" component={Dinner}/> 
      <Stack.Screen name="Page1" component={Page1}/>
      <Stack.Screen name = "Lunch" component={Lunch}/>
      <Stack.Screen name="Breakfast" component={Breakfast}/> 
      <Stack.Screen name = "Login" component={Login}/>
      <Stack.Screen name = "Password" component={Password}/>
      <Stack.Screen name = "SignUp" component={SignUp}/>
      <Stack.Screen name = "Calculator" component={Test}/> 
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default App
