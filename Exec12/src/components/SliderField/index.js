import React from 'react';
import { Text, View, Slider } from 'react-native';
import styles from './styles';

export default function SliderField({ label, value, onValueChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}: {value.toFixed(0)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1000}
        step={10}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
}
