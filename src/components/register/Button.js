import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button({ text, style, onPress }) {
  const handleClick = () => {
    onPress && onPress();
  };
  return (
    <TouchableOpacity style={[{}, style]} onPress={handleClick}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
