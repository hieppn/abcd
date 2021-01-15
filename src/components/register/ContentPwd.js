import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
// import { Images } from '../../themes';
const ContentPwd = ({ onChangeText, text }) => {
  const [isView, setView] = useState(true);
  const show = () => {
    setView(!isView);
  };
  return (
    <View style={styles.content}>
      <Text style={{ marginBottom: 10 }}>{text}</Text>
      <TextInput
        style={styles.ip}
        secureTextEntry={isView}
        onChangeText={(tnd) => onChangeText(tnd)}
      />
      <TouchableOpacity onPress={() => show()} style={styles.tob}>
        <Image
          source={isView ? require("../../assets/Images/view.png") : require("../../assets/Images/visibility.png")}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  ip: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
  },
  tob: {
    position: 'absolute',
    width: 20,
    height: 20,
    right: 10,
    top: 40,
  },
  content: { margin: 10, position: 'relative' },
});
export default ContentPwd;
