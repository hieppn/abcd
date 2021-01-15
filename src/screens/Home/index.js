import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import LoginTypes  from '../../redux/LoginRedux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(LoginTypes.userLogout());
  };
  
  const email = useSelector((state) => state.login.loginResponse.email);
  //console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{email} </Text>
      <TouchableOpacity onPress={onLogout} style={{height:200,width:200}}><Text style={{color:'black'}}>Logout</Text></TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  txt: {
    flex:1,
    justifyContent: 'center',
    alignItems: "center",
    color: 'black',
  },
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
});
