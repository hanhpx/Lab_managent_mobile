import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AreaScreen from "./Area/AreaScreen";
import MaterialScreen from "./Material/MaterialScreen";
import PlantScreen from "./Plant/PlantScreen";
import TaskScreen from "./Task/TaskScreen";
import UserScreen from "./User/UserScreen";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const tabBar = () =>{
    const navigation = useNavigation();
    const onclickSignout = () =>
    {
        navigation.navigate('Login');
    }
    return (
        <View style={{backgroundColor: '#23D64B', flex: 1}}>
            <View style={{ backgroundColor:'white', flexDirection:'row'}}>
                <View style={{alignItems:'center', paddingLeft:200}}>
                    <TouchableOpacity style={{width:30, height:50,padding:5}}  onPress={onclickSignout}>
                        <FontAwesomeIcon name="arrow-left" size={25}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{backgroundColor: 'white', margin: 10, flex: 1, borderRadius: 10,}}>
                <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#23D64B'}}>
                    <Tab.Screen options={{headerShown: false, tabBarIcon: ({color,size}) => <FontAwesomeIcon name = "layer-group" color={color} size={size}/> }} name = "Area" component={AreaScreen} />
                    <Tab.Screen options={{headerShown: true, tabBarIcon: ({color,size}) => <FontAwesomeIcon name = "boxes" color={color} size={size}/> }} name = "Material" component={MaterialScreen} />
                    <Tab.Screen options={{headerShown: true, tabBarIcon: ({color,size}) => <FontAwesomeIcon name = "solid seedling" color={color} size={size}/> }} name = "Plant" component={PlantScreen} />
                    <Tab.Screen options={{headerShown: true, tabBarIcon: ({color,size}) => <FontAwesomeIcon name = "list" color={color} size={size}/> }} name = "Task" component={TaskScreen} />
                    <Tab.Screen options={{headerShown: true, tabBarIcon: ({color,size}) => <FontAwesomeIcon name = "user" color={color} size={size}/> }} name = "User" component={UserScreen} />
                </Tab.Navigator>      
            </View>
        </View>
    );
};

export default tabBar;