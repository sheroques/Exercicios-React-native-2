import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Keyboard,
} from 'react-native';
import axios from 'axios';
import CommonStyles from './styles';

const CurrencyConverter = ({ fromCurrency, toCurrency, displayToCurrency }) => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [rate, setRate] = useState(null);

  // Exemplo de API de cotação. Você pode usar uma mais robusta se necessário.
  // Esta API é bem simples e pode não ter todas as moedas ou ser a mais atualizada.
  // Para Bitcoin, usaremos uma alternativa.
  const API_URL = `https://economia.awesomeapi.com.br/json/last/${fromCurrency}-${toCurrency}`;
  const BITCOIN_API_URL = 'https://api.coindesk.com/v1/bpi/currentprice/BRL.json'; // Para Bitcoin em BRL

  useEffect(() => {
    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const fetchExchangeRate = async () => {
    setLoading(true);
    try {
      let currentRate;
      if (toCurrency === 'BTC') {
        const response = await axios.get(BITCOIN_API_URL);
        // A API do CoinDesk retorna o preço do BRL em USD, precisamos do inverso: USD para BRL e depois o BRL para BTC
        // No caso do CoinDesk, ele já dá o BRL, então pegamos direto.
        currentRate = response.data.bpi.BRL.rate_float; // Preço de 1 BTC em BRL
        setRate(currentRate);
      } else {
        const response = await axios.get(API_URL);
        const data = response.data[`${fromCurrency}${toCurrency}`];
        if (data && data.bid) {
          currentRate = parseFloat(data.bid); // O preço de compra da moeda
          setRate(currentRate);
        } else {
          throw new Error('Cotação não encontrada ou dados inválidos.');
        }
      }
    } catch (error) {
      console.error('Erro ao buscar cotação:', error);
      Alert.alert(
        'Erro na Cotação',
        'Não foi possível buscar a cotação. Verifique sua conexão ou tente novamente mais tarde.'
      );
      setRate(null);
    } finally {
      setLoading(false);
    }
  };

  const handleConvert = () => {
    Keyboard.dismiss(); // Fecha o teclado
    const value = parseFloat(inputValue.replace(',', '.')); // Lida com vírgula para decimal

    if (isNaN(value) || value <= 0) {
      setResult('Por favor, digite um valor válido.');
      return;
    }

    if (rate === null) {
      setResult('Cotação não disponível. Tente novamente.');
      return;
    }

    let convertedValue;
    if (toCurrency === 'BTC') {
      // Para converter BRL para BTC, dividimos o valor em BRL pela cotação do BTC em BRL
      convertedValue = value / rate;
      setResult(`${value.toFixed(2).replace('.', ',')} BRL = ${convertedValue.toFixed(8)} ${displayToCurrency}`);
    } else {
      // Para Dólar e Euro, a cotação é de 1 unidade da moeda para Real.
      // Queremos o inverso: Real para Moeda, então dividimos.
      convertedValue = value / rate;
      setResult(`${value.toFixed(2).replace('.', ',')} BRL = ${convertedValue.toFixed(2)} ${displayToCurrency}`);
    }
  };

  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.title}>
        Converter {fromCurrency} para {displayToCurrency}
      </Text>

      <TextInput
        style={CommonStyles.input}
        placeholder={`Digite o valor em ${fromCurrency}`}
        keyboardType="numeric"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        placeholderTextColor="#999"
      />

      <TouchableOpacity
        style={CommonStyles.button}
        onPress={handleConvert}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={CommonStyles.buttonText}>Converter</Text>
        )}
      </TouchableOpacity>

      <View style={CommonStyles.resultContainer}>
        <Text style={CommonStyles.resultLabel}>Resultado:</Text>
        <Text style={CommonStyles.resultText}>{result}</Text>
      </View>

      {rate && (
        <Text style={CommonStyles.rateInfo}>
          Cotação atual (1 {displayToCurrency} = {rate.toFixed(4).replace('.', ',')} BRL)
          {toCurrency === 'BTC' && " (aprox.)"}
        </Text>
      )}
    </View>
  );
};

export default CurrencyConverter;