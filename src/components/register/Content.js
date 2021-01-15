import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Content = ({ onChangeText, text }) => {
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ marginBottom: 10 }}>{text}</Text>
      <TextInput
        style={styles.ip}
        // value={value}
        onChangeText={(txt) => onChangeText(txt)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  ip: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default Content;
