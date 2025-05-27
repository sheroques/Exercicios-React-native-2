import React from 'react';
import { Text, View, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

export default function SelectField({ label, selectedValue, onValueChange, options }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => onValueChange(itemValue)}
      >
        {options.map((opt, index) => (
          <Picker.Item key={index} label={opt} value={opt} />
        ))}
      </Picker>
    </View>
  );
}
