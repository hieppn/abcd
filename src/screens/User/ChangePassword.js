import React, { useState } from 'react';
import { StyleSheet, Text, View, Image ,ActivityIndicator} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import LoginTypes from '../../redux/LoginRedux/actions';
import { Colors } from '../../themes';
import PassWordInput from '../../components/register/PasswordInput';
import visibility from '../../assets/Images/visibility.png';
import witness from '../../assets/Images/witness.png';
const ChangePassword = () => {
  const [] = useState(true);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const dispatch = useDispatch();
  const onChangePassword = () => {
      if(confirm==newPassword){
        const dataPassword={
            password: password,
            newPassword: newPassword,
        }
        dispatch(LoginTypes.userChangePassword(dataPassword));
      }else{
          alert("Vui lòng xác thực mật khẩu của bạn.");
      }
    
  };

  const isLoading = useSelector((state) => state.login.loadingLogin);
  const isError = useSelector((state) => state.login.errorChangePassword);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layoutTitle}>
        <Text style={styles.title}>Thay đổi mật khẩu</Text>
      </View>
      <PassWordInput
        title="Mật khẩu *"
        imageClose={visibility}
        imageOpen={witness}
        onChangePass={(val) => setPassword(val)}/>
      <PassWordInput
        title="Mật khẩu mới *"
        imageClose={visibility}
        imageOpen={witness}
        onChangePass={(val) => setNewPassword(val)}
      />
      <PassWordInput
        title="Xác thực mật khẩu mới *"
        imageClose={visibility}
        imageOpen={witness}
        onChangePass={(val) => setConfirm(val)}
      />
        { isLoading &&  <ActivityIndicator size="large" color="#00ff00" />}
      <TouchableOpacity onPress={onChangePassword} style={styles.signupButton}>
        <Text style={styles.textSignUp}>Đổi</Text>
      </TouchableOpacity>
      { isError && <Text style={{marginTop:10}}>{isError}</Text>}
    </ScrollView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex:0.6,
    padding: 20,
  },
  layoutTitle: {
    flexDirection: 'row',
    marginTop:20,
    alignSelf:'center',
    justifyContent:'center',
    marginBottom:20,
  },
  title:{
    fontSize:25,
    fontWeight:'bold',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
  },
  signupButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: 2,
    marginTop: 40,
  },
  textSignUp: {
    color: 'white',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
  },
});
