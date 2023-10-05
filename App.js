import React from "react";
import Login from "./component/login/login.js";
import SignUpForm from "./component/login/SignUpForm.js";
import ForgotPassword from "./component/login/ForgotPassword.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tabBar from "./component/app/tabBar.js";

const Stack = createNativeStackNavigator();

export default function App()
{
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "Login" component={Login} />
        <Stack.Screen name = "Signup" component={SignUpForm} />
        <Stack.Screen name = "ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name = "tabBar" component={tabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}