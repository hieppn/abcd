import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import LoginTypes  from '../../redux/LoginRedux/actions';
import { Colors } from '../../themes';
import profile from '../../assets/Images/profile.jpg';
import { Navigation } from 'react-native-navigation';
const Profile = (props) => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(LoginTypes.userLogout());
  };
 const onChangePassword=()=>{
  Navigation.push(props.componentId, {
    component: {
      name: 'ChangePassword',
      options: {
        topBar: {
          visible: false,
          height: 0,
        },
      },
    },
  });
 };
  const user = useSelector((state) => state.login.loginResponse);
  console.log(user);
  return (
    <View style={styles.container}>
     <View style={styles.header}>
         <Image source={profile} style={styles.image}/>
     </View>
     <Text style={styles.name}>{user && user.lastName +" "+ user.firstName }</Text>
     <Text style={styles.txt}>{user && user.email}</Text>
     {user && <TouchableOpacity onPress={()=>onChangePassword()}><Text>Change Password</Text></TouchableOpacity>}
      <TouchableOpacity onPress={onLogout} style={{ marginTop:10, justifyContent: 'center', alignItems:'center', backgroundColor: Colors.semanticYellow}}><Text style={styles.txt}>Logout</Text></TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  txt: {
    justifyContent: 'center',
    alignItems: "center",
    color: 'black',
    padding:5,
    fontSize: 20,
  },
  name: {
    justifyContent: 'center',
    alignItems: "center",
    color: 'black',
    padding:15,
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
  },
  image: {
    height:250,
    width: 200,
    justifyContent:'center',
    alignItems: 'center',
  },
});
