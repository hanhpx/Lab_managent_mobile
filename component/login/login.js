import React from "react";
import {View, Text, TextInput, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import SysModal from "./sys_modal";
import { useState } from "react";
import {useNavigation} from '@react-navigation/native';

const Login = ()=>
{
  const navigation = useNavigation();

  //handle when input user & password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setshowModal] = useState('false');
  const [ErrorMessage, setErrorMessage] = useState('');

  //hide modal
  const onhideModal = () =>
  {
      setshowModal(false);
  };

  const onchangedUsername = value => 
  {
      setUsername(value);
  };
  const onchangedPassword = value =>
  {
      setPassword(value);
  };
  //click login
  const onClickLogin = () =>
  {
      if(password.length == 0 || username.length ==0)
      {
          setErrorMessage("Tài khoản hoặc mật khẩu không chính xác");
          setshowModal(true);
          return console.log("please enter information login");
      }
      console.log("click login", {username, password});

      if(password.length!=0 && username.length!=0)
      {
        navigation.navigate('tabBar');
      }
  };
  //click create new account
  const onClickCreateAccount = () =>
  {
    navigation.navigate('Signup');
  }
  //click Forgot password
  const onclickForgot = () =>
  {
    navigation.navigate('ForgotPassword');
  }
  return (
    <View style={{backgroundColor: '#23D64B', flex: 1}}>
      <SysModal visible={showModal} message={ErrorMessage} onHide={onhideModal}/>
      <View style={{backgroundColor: 'white', margin: 10, flex: 1, borderRadius: 10,}}>
        <View style={{flex: 1, marginVertical :20,}}>
          {/*header*/}
          <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black',}}>
              Đăng nhập
            </Text>
          </View>
          {/*body*/}
          <View style={{flex: 6}}>
            <View style={{margin: 30,}}>
              {/**username */}
              <View style={{marginBottom: 20, }}> 
                <Text style={{color: 'black'}}>Tài Khoản</Text>
                <View style={{flexDirection:'row', borderBottomColor: 'grey', borderBottomWidth: 1}}>
                  <View style={{justifyContent:'center', alignItems:'center', padding:10}}>
                    <FontAwesomeIcon name="user"/>
                  </View>
                  <View>
                    <TextInput value={username} onChangeText={onchangedUsername} placeholder={"Nhập tài khoản"}/>
                  </View>
                </View>
              </View>
              {/**Password */}
              <View style={{marginBottom: 20, }}> 
                <Text style={{color: 'black'}}>Mật Khẩu</Text>
                <View style={{flexDirection:'row', borderBottomColor: 'grey', borderBottomWidth: 1}}>
                  <View style={{justifyContent:'center', alignItems:'center', padding:10}}>
                    <FontAwesomeIcon name="lock"/>
                  </View>
                  <View>
                    <TextInput secureTextEntry={true} placeholder={"Nhập mật khẩu"} value={password} onChangeText={onchangedPassword}/>
                  </View>
                </View>
              </View>
              {/**forgot password */}
              <View style={{marginTop: 10, alignItems : 'flex-end', }}>
                <TouchableOpacity onPress={onclickForgot}>
                  <Text style={{color: 'black'}}>Quên mật khẩu?</Text>
                </TouchableOpacity>
              </View>
              {/**Login button */}
              <View style={{justifyContent:'center', alignItems:'center', marginVertical: 20}}>
                <TouchableOpacity onPress={onClickLogin}>  
                  <LinearGradient style={{padding:10, borderRadius:50, width: 300, justifyContent:'center', alignItems:'center'}} colors={['#AED6F1', '#23D64B', '#AED6F1']} useAngle={true} angle={45}>   
                    <Text style={{color:'white', fontWeight: 'bold' }}>ĐĂNG NHẬP</Text>  
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/*footer*/}
          <View style={{flex: 2, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress={onClickCreateAccount}>
                <Text style={{color:'black', fontWeight:'500'}}>Tạo tài khoản mới</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;