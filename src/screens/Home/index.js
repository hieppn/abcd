import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import LoginTypes  from '../../redux/LoginRedux/actions';
import { Colors } from '../../themes';
import { Navigation } from 'react-native-navigation';
const Home = (props) => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(LoginTypes.userLogout());
  };
  const onHandleProfile=()=>{
    
    Navigation.push(props.componentId, {
      component: {
        name: 'Profile',
        options: {
          topBar: {
            visible: false,
            height: 0,
          },
        },
      },
    });
    dispatch(LoginTypes.userGetInformation());
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onHandleProfile} style={{ marginTop:10, justifyContent: 'center', alignItems:'center', backgroundColor: Colors.primary}}><Text style={styles.txt}>Profile</Text></TouchableOpacity>
      <TouchableOpacity onPress={onLogout} style={{ marginTop:10, justifyContent: 'center', alignItems:'center', backgroundColor: Colors.semanticYellow}}><Text style={styles.txt}>Logout</Text></TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  txt: {
    justifyContent: 'center',
    alignItems: "center",
    color: 'black',
    padding:5
  },
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
});
