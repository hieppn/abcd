import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView,ActivityIndicator } from 'react-native';
import visibility from '../../assets/Images/visibility.png';
import witness from '../../assets/Images/witness.png';
import ItemInput from '../../components/register/InputItem';
import PassWordInput from '../../components/register/PasswordInput';
import {useDispatch, useSelector} from 'react-redux';
import   LoginTypes from '../../redux/LoginRedux/actions';
import { Navigation } from 'react-native-navigation';
const Login = (props) => {
  const [] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let dataLogin = {
    email: email,
    password: password
  };
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.login.loadingLogin);
  const isError = useSelector((state) => state.login.errorLogin);
  const onLogin = ()=>{
    console.log("Hello");
    dispatch(LoginTypes.userLogin(dataLogin));
  };
  const onHandleSignUp= ()=>{
    Navigation.push(props.componentId, {
      component: {
        name: 'SignUp',
        options: {
          topBar: {
            visible: false,
            height: 0,
          },
        },
      },
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layoutTitle}>
        <Text style={styles.title}>Đăng nhập</Text>
      </View>
      <ItemInput title="Email*" ChangeText={(val) => setEmail(val)} />
      <PassWordInput
        title="Mật khẩu*"
        imageClose={visibility}
        imageOpen={witness}
        onChangePass={(val) => setPassword(val)}
      />
      { isLoading &&  <ActivityIndicator size="large" color="#00ff00" />}
     { isError && <Text style={{color:"red"}}>{isError}</Text>}
      <View style={styles.layoutButton}>
        <TouchableOpacity style={styles.loginButton} onPress= {onLogin}>
          <Text style={styles.textSignUp}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={onHandleSignUp}>
          <Text>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.policy}>
        Bằng việc xác nhận tạo tài khoản, bạn đã đồng ý với{' '}
        <Text style={styles.policyHighLight}>điều khoản quy định</Text> của chúng tôi
      </Text>
    </ScrollView>
  );
};
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
    paddingHorizontal: 40,
    backgroundColor: '#41B8C1',
    borderColor: '#41B8C1',
    borderWidth: 2,
  },
  signupButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
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
export default Login;
//Navigation.registerComponent('SignUp', () => SignUp);