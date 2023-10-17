import React from "react";
import Login from "./component/login/login.js";
import SignUpForm from "./component/login/SignUpForm.js";
import ForgotPassword from "./component/login/ForgotPassword.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tabBar from "./component/app/tabBar.js";
import addArea from "./component/app/Area/addArea.js";
import addMaterial from "./component/app/Material/addMaterial.js"
import addPlant from "./component/app/Plant/addPlant.js"
import addTask from "./component/app/Task/addTask.js"
import addUser from "./component/app/User/addUser.js"

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
        <Stack.Screen name = "addArea" component={addArea} />
        <Stack.Screen name = "addMaterial" component={addMaterial} />
        <Stack.Screen name = "addPlant" component={addPlant} />
        <Stack.Screen name = "addTask" component={addTask} />
        <Stack.Screen name = "addUser" component={addUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}