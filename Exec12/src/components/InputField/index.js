import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';

export default function InputField({ label, value, onChangeText, keyboardType = 'default' }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
}
