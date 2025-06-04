import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, Keyboard } from 'react-native';
import axios from 'axios';
import CurrencyConverterStyles from './styles';

const API_BASE_URL = 'https://economia.awesomeapi.com.br/json/last/';

const CurrencyConverterScreen = () => {
  const [realInput, setRealInput] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD'); // USD, EUR, BTC
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const getApiEndpoint = (currency) => {
    switch (currency) {
      case 'USD':
        return 'USD-BRL';
      case 'EUR':
        return 'EUR-BRL';
      case 'BTC':
        return 'BTC-BRL';
      default:
        return 'USD-BRL'; // Default para Dólar
    }
  };

  const getResultAttribute = (currency) => {
    switch (currency) {
      case 'USD':
        return 'USDBRL';
      case 'EUR':
        return 'EURBRL';
      case 'BTC':
        return 'BTCBRL';
      default:
        return 'USDBRL';
    }
  };

  const handleConvert = async () => {
    Keyboard.dismiss(); // Esconde o teclado
    const valueInReal = parseFloat(realInput.replace(',', '.')); // Garante que o input seja um número

    if (isNaN(valueInReal) || valueInReal <= 0) {
      Alert.alert('Valor Inválido', 'Por favor, digite um valor numérico válido e maior que zero em R$.');
      setResult('');
      return;
    }

    setLoading(true);
    setResult('');

    try {
      const endpoint = getApiEndpoint(selectedCurrency);
      const response = await axios.get(`${API_BASE_URL}${endpoint}`);
      const data = response.data;

      const attribute = getResultAttribute(selectedCurrency);
      const currencyData = data[attribute];

      if (currencyData && currencyData.ask) {
        const conversionRate = parseFloat(currencyData.ask);
        const convertedValue = valueInReal / conversionRate;
        setResult(`${convertedValue.toFixed(2)} ${selectedCurrency}`);
      } else {
        Alert.alert('Erro na Cotação', 'Não foi possível obter a cotação para a moeda selecionada.');
        setResult('Erro');
      }
    } catch (error) {
      console.error('Erro ao converter moeda:', error);
      Alert.alert('Erro na Consulta', 'Não foi possível realizar a conversão. Verifique sua conexão ou tente novamente.');
      setResult('Erro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={CurrencyConverterStyles.container}>
      <Text style={CurrencyConverterStyles.title}>Conversor de Moedas</Text>

      <View style={CurrencyConverterStyles.currencySelector}>
        <TouchableOpacity
          style={[
            CurrencyConverterStyles.currencyButton,
            selectedCurrency === 'USD' && CurrencyConverterStyles.currencyButtonSelected,
          ]}
          onPress={() => setSelectedCurrency('USD')}
        >
          <Text style={[
            CurrencyConverterStyles.currencyButtonText,
            selectedCurrency === 'USD' && CurrencyConverterStyles.currencyButtonTextSelected,
          ]}>Dólar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            CurrencyConverterStyles.currencyButton,
            selectedCurrency === 'EUR' && CurrencyConverterStyles.currencyButtonSelected,
          ]}
          onPress={() => setSelectedCurrency('EUR')}
        >
          <Text style={[
            CurrencyConverterStyles.currencyButtonText,
            selectedCurrency === 'EUR' && CurrencyConverterStyles.currencyButtonTextSelected,
          ]}>Euro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            CurrencyConverterStyles.currencyButton,
            selectedCurrency === 'BTC' && CurrencyConverterStyles.currencyButtonSelected,
          ]}
          onPress={() => setSelectedCurrency('BTC')}
        >
          <Text style={[
            CurrencyConverterStyles.currencyButtonText,
            selectedCurrency === 'BTC' && CurrencyConverterStyles.currencyButtonTextSelected,
          ]}>Bitcoin</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={CurrencyConverterStyles.input}
        placeholder="Digite o valor em R$"
        keyboardType="numeric"
        value={realInput}
        onChangeText={setRealInput}
        placeholderTextColor="#666"
      />

      <TouchableOpacity
        style={CurrencyConverterStyles.convertButton}
        onPress={handleConvert}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={CurrencyConverterStyles.convertButtonText}>Converter</Text>
        )}
      </TouchableOpacity>

      <Text style={CurrencyConverterStyles.resultLabel}>Resultado</Text>
      <Text style={CurrencyConverterStyles.resultText}>
        {result || '--'}
      </Text>
    </View>
  );
};

export default CurrencyConverterScreen;