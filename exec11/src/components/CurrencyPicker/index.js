import React from 'react';
import { View, Text, Picker } from 'react-native';
import styles from './styles';

const CurrencyPicker = ({ label, selected, onChange }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <Picker
      selectedValue={selected}
      style={styles.picker}
      onValueChange={(itemValue) => onChange(itemValue)}
    >
      <Picker.Item label="Dólar" value="USD" />
      <Picker.Item label="Real" value="BRL" />
      <Picker.Item label="Euro" value="EUR" />
    </Picker>
  </View>
);

export default CurrencyPicker;
