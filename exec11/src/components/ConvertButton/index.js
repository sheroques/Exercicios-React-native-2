import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const ConvertButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>Converter</Text>
  </TouchableOpacity>
);

export default ConvertButton;
