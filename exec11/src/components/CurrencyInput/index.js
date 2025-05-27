import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './styles';

const CurrencyInput = ({ value, onChangeText }) => (
  <View style={styles.container}>
    <Text style={styles.label}>Valor:</Text>
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
      placeholder="Digite o valor"
    />
  </View>
);

export default CurrencyInput;
