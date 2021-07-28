import React from "react";
import Login from "./components/Login.js";
import Register from "./components/Register.js";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Welcome() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>
  </NavigationContainer>
    
  );
}
