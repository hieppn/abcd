/* eslint-disable react-native/no-unused-styles */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView,ActivityIndicator } from 'react-native';

import visibility from '../../assets/Images/visibility.png';
import witness from '../../assets/Images/witness.png';
import ItemInput from '../../components/register/InputItem';
import PassWordInput from '../../components/register/PasswordInput';
import { Navigation } from 'react-native-navigation';
import Login from './index.js';
import LoginTypes from '../../redux/LoginRedux/actions';
import {useDispatch, useSelector} from 'react-redux';

const SignUp = (props) => {
  const [] = useState(true);
  const [firstName, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthDay] = useState('');
  const [pass, setPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const dispatch = useDispatch();
  
  const isLoading = useSelector((state) => state.login.loadingLogin);
  const isError = useSelector((state) => state.login.errorLogin);
  const onLogin = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'Login',
        options: {
          topBar: {
            visible: false,
            height: 0,
          },
        },
      },
    });
  };
  const SignUp = () => {
    if(confirm==pass){
    let data ={
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: pass,
      phone: phone,
      birthDay: birthday
    };
  dispatch(LoginTypes.userSignup(data));
  }
    else{
      alert('Vui lòng xác nhận mật khẩu.');
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layoutTitle}>
        <Text style={styles.title}>Đăng ký</Text>
      </View>
      <ItemInput title="Tên*" ChangeText={(val) => setName(val)} />
      <ItemInput title="Họ*" ChangeText={(val) => setLastName(val)} />
      <ItemInput title="Email*" ChangeText={(val) => setEmail(val)} />
      <ItemInput title="Ngày sinh*" ChangeText={(val) => setBirthDay(val)} />
      <ItemInput title="Số điện thoại*" ChangeText={(val) => setPhone(val)} />
      <PassWordInput
        title="Mật khẩu*"
        imageClose={visibility}
        imageOpen={witness}
        onChangePass={(val) => setPass(val)}
      />
      <PassWordInput
        title="Xác nhận mật khẩu*"
        imageClose={visibility}
        imageOpen={witness}
        onChangePass={(val) => setConfirm(val)}
      />
       { isLoading &&  <ActivityIndicator size="large" color="#00ff00" />}
       { isError && <Text>{isError}</Text>}
      <View style={styles.layoutButton}>
        <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.textLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={SignUp}>
          <Text style={styles.textSignUp}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.policy}>
        Bằng việc xác nhận tạo tài khoản, bạn đã đồng ý với{' '}
        <Text style={styles.policyHighLight}>điều khoản quy định</Text> của chúng tôi
      </Text>
    </ScrollView>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  layoutTitle: {
    flex: 0.7,
    flexDirection: 'row',
  },
  closeImage: {
    height: 20,
    width: 20,
    marginTop: 7,
  },
  title: {
    color: '#505050',
    fontSize: 28,
    marginLeft: '32%',
  },
  layoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: '#41B8C1',
    borderWidth: 2,
  },
  signUpButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#41B8C1',
    borderColor: '#41B8C1',
    borderWidth: 2,
  },
  textSignUp: {
    color: 'white',
  },
  policy: {
    marginTop: 20,
    paddingHorizontal: 10,
    color: 'gray',
    textAlign: 'center',
    fontSize: 16,
  },
  policyHighLight: { color: '#25969E', fontSize: 16 },
  showPassword: {
    position: 'absolute',
    right: 10,
    top: 38,
  },
});
