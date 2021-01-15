/* eslint-disable react-native/no-unused-styles */
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
const PassWordInput = (props) => {
  const [isShowPass, setShowPass] = useState(true);
  return (
    <View style={styles.layoutInput}>
      <Text style={styles.titleInput}>{props.title}</Text>
      <TextInput
        secureTextEntry={isShowPass}
        style={styles.textInput}
        onChangeText={(value) => props.onChangePass(value)}
      />
      <TouchableOpacity
        style={styles.showPassword}
        onPress={() => {
          setShowPass(!isShowPass);
        }}
      >
        <Image source={isShowPass ? props.imageClose : props.imageOpen} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  layoutInput: {
    flex: 1,
  },
  titleInput: {
    color: 'gray',
    fontSize: 15,
    marginBottom: 5,
  },
  textInput: {
    height: 45,
    borderColor: '#dddddd',
    borderWidth: 1,
  },
  closeImage: {
    height: 20,
    width: 20,
    marginTop: 7,
  },
  showPassword: {
    position: 'absolute',
    right: 10,
    top: 38,
  },
});
export default PassWordInput;
