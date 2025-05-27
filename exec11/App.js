import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderTitle from './src/components/HeaderTitle/index';
import CurrencyInput from './src/components/CurrencyInput/index';
import CurrencyPicker from './src/components/CurrencyPicker/index';
import ConvertButton from './src/components/ConvertButton/index';
import ResultText from './src/components/ResultText/index';

export default function App() {
  const [value, setValue] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('BRL');
  const [result, setResult] = useState('');

  const rates = {
    USD: { BRL: 5, EUR: 0.9 },
    BRL: { USD: 0.2, EUR: 0.18 },
    EUR: { USD: 1.1, BRL: 5.5 },
  };

  const handleConvert = () => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue) && rates[from] && rates[from][to]) {
      const converted = numericValue * rates[from][to];
      setResult(`${numericValue} ${from} = ${converted.toFixed(2)} ${to}`);
    } else {
      setResult('Conversão inválida');
    }
  };

  return (
    <View style={styles.container}>
      <HeaderTitle />
      <CurrencyInput value={value} onChangeText={setValue} />
      <CurrencyPicker label="De:" selected={from} onChange={setFrom} />
      <CurrencyPicker label="Para:" selected={to} onChange={setTo} />
      <ConvertButton onPress={handleConvert} />
      <ResultText result={result} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },
});
