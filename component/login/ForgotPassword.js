import React from "react";
import {View, Text, TextInput, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = ()=>
{
    const navigation = useNavigation();

    const onclickBack = () =>
    {
        navigation.navigate('Login');
    }

  return (
    <View style={{backgroundColor: '#23D64B', flex: 1}}>
        <View style={{backgroundColor: 'white', margin: 10, flex: 1, borderRadius: 10,}}>
            {/*header*/}
            <View style={{flex: 2, justifyContent: 'center', alignItems:'center'}}>
                {/**button back */}
                <View style={{alignItems:"flex-start",flex:1, paddingRight:330, paddingTop:10}}>
                    <TouchableOpacity style={{width:30, height:50,padding:5}} onPress={onclickBack}>
                        <FontAwesomeIcon name="arrow-left" size={25}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black',}}>
                        Quên mật khẩu
                    </Text>
                </View>
            </View>
            {/**Border */}
            <View style={{flex:8}}>
                <View style={{margin:30}}>
                    {/**name */}
                    <View style={{marginBottom: 20}}> 
                        <Text style={{color: 'black'}}>Email</Text>
                        <View style={{flexDirection:'row', borderBottomColor: 'grey', borderBottomWidth: 1}}>
                            <View style={{justifyContent:'center', alignItems:'center', padding:10}}>
                                <FontAwesomeIcon name="envelope"/>
                            </View>
                            <View>
                                <TextInput placeholder={"Nhập email"}/>
                            </View>
                        </View>
                    </View>
                    {/**mail */}
                    <View style={{marginBottom: 20,}}> 
                        <Text style={{color: 'black'}}>Tài Khoản</Text>
                        <View style={{flexDirection:'row', borderBottomColor: 'grey', borderBottomWidth: 1}}>
                            <View style={{justifyContent:'center', alignItems:'center', padding:10}}>
                                <FontAwesomeIcon name="user"/>
                            </View>
                            <View>
                                <TextInput placeholder={"Nhập tài khoản"}/>
                            </View>
                        </View>
                    </View>
                    {/**account */}
                    <View style={{marginBottom: 20}}> 
                        <Text style={{color: 'black'}}>Mật Khẩu Mới</Text>
                        <View style={{flexDirection:'row', borderBottomColor: 'grey', borderBottomWidth: 1}}>
                            <View style={{justifyContent:'center', alignItems:'center', padding:10}}>
                                <FontAwesomeIcon name="lock"/>
                            </View>
                            <View>
                                <TextInput secureTextEntry={true} placeholder={"Nhập mật khẩu mới"}/>
                            </View>
                        </View>
                    </View>
                    {/**password */}
                    <View style={{marginBottom: 20}}> 
                        <Text style={{color: 'black'}}>Nhập Lại Mật Khẩu</Text>
                        <View style={{flexDirection:'row', borderBottomColor: 'grey', borderBottomWidth: 1}}>
                            <View style={{justifyContent:'center', alignItems:'center', padding:10}}>
                                <FontAwesomeIcon name="lock"/>
                            </View>
                            <View>
                                <TextInput secureTextEntry={true} placeholder={"Nhập lại mật khẩu mới"}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {/**Login button */}
            <View style={{justifyContent:'center', alignItems:'center', marginVertical: 20}}>
                <TouchableOpacity>  
                  <LinearGradient style={{padding:10, borderRadius:50, width: 300, justifyContent:'center', alignItems:'center'}} colors={['#AED6F1', '#23D64B', '#AED6F1']} useAngle={true} angle={45}>   
                    <Text style={{color:'white', fontWeight: 'bold' }}>GỬI YÊU CẦU</Text>  
                  </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={{flex:1}}></View>
        </View>
    </View>
  );
};

export default ForgotPassword;