import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const ResultText = ({ result }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{result}</Text>
  </View>
);

export default ResultText;
