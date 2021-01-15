import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
const ItemInput = (props) => {
  return (
    <View style={styleInput.layoutInput}>
      <Text style={styleInput.titleInput}>{props.title}</Text>
      <TextInput style={styleInput.textInput} onChangeText={props.ChangeText} />
    </View>
  );
};
const styleInput = StyleSheet.create({
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
});
export default ItemInput;
