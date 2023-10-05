import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import logoApp from "../image/logo.jpg";
import { Image } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import {useNavigation} from '@react-navigation/native';

const Utility = () =>
{
    const navigation = useNavigation();
    const onclickSignout = () =>
    {
        navigation.navigate('Login');
    }
    return (
        <View style={{backgroundColor:'#23D64B', flex:1}}>
            <View style={{backgroundColor:'white', flex:1, borderRadius:10,margin:10}}>
                <View style={{flex:1, marginVertical:0}}>
                    {/**header */}
                    <View style={{flex:1, backgroundColor:'white', flexDirection:'row'}}>
                        <Image source={logoApp} style={{width:110, height:110, borderRadius:10}}/>
                        <View style={{alignItems:'center', paddingLeft:200}}>
                            <TouchableOpacity style={{width:30, height:50,padding:5}} onPress={onclickSignout}>
                                <FontAwesomeIcon name="arrow-left" size={25}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/**body */}
                    <View style={{backgroundColor:'blue', flex: 5}}>
                        <Text>Body</Text>
                    </View>
                    {/**footer */}
                    <View style={{backgroundColor:'red', flex:1}}>
                        <Text>Footer</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Utility;