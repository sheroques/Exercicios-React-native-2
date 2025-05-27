import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const HeaderTitle = () => (
  <View>
    <Text style={styles.title}>Conversor de Moedas</Text>
    <Text style={styles.subtitle}>Dólar, Real e Euro</Text>
  </View>
);

export default HeaderTitle;
