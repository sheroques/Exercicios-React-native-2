import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios'; // <--- IMPORTAÇÃO DO AXIOS
import CepConsultaStyles from './styles';

const CepConsultaScreen = () => {
  const [cepInput, setCepInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [addressData, setAddressData] = useState(null);

  const handleCepSearch = async () => {
    Keyboard.dismiss();
    if (cepInput.trim().length !== 8 || !/^\d+$/.test(cepInput.trim())) {
      Alert.alert('CEP Inválido', 'Por favor, digite um CEP válido com 8 dígitos.');
      return;
    }

    setLoading(true);
    setAddressData(null);

    try {
      
      const response = await axios.get(`https://viacep.com.br/ws/${cepInput.trim()}/json/`);
      const data = response.data; 

      if (data.erro) {
        Alert.alert('CEP Não Encontrado', 'O CEP digitado não foi encontrado ou é inválido.');
        setAddressData(null);
      } else {
        setAddressData(data);
      }
    } catch (error) {
      console.error('Erro ao consultar CEP:', error);
      // Axios retorna erros em error.response (para erros de servidor) ou error.message
      const errorMessage = error.response ? `Erro: ${error.response.status} - ${error.response.statusText}` : error.message;
      Alert.alert('Erro na Consulta', `Não foi possível consultar o CEP. Detalhes: ${errorMessage}`);
      setAddressData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={CepConsultaStyles.container}>
      <Text style={CepConsultaStyles.title}>Cep x Endereço</Text>

      <View style={CepConsultaStyles.inputContainer}>
        <TextInput
          style={CepConsultaStyles.cepInput}
          placeholder="Digite o CEP..."
          keyboardType="numeric"
          maxLength={8}
          value={cepInput}
          onChangeText={setCepInput}
        />
        <TouchableOpacity
          style={CepConsultaStyles.searchButton}
          onPress={handleCepSearch}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Ionicons name="checkmark" size={30} color="#fff" />
          )}
        </TouchableOpacity>
      </View>

      {addressData && (
        <View style={CepConsultaStyles.resultContainer}>
          <Text style={CepConsultaStyles.resultLabel}>Cep: <Text style={CepConsultaStyles.resultValue}>{addressData.cep}</Text></Text>
          <Text style={CepConsultaStyles.resultLabel}>Logradouro: <Text style={CepConsultaStyles.resultValue}>{addressData.logradouro}</Text></Text>
          <Text style={CepConsultaStyles.resultLabel}>Bairro: <Text style={CepConsultaStyles.resultValue}>{addressData.bairro}</Text></Text>
          <Text style={CepConsultaStyles.resultLabel}>Cidade: <Text style={CepConsultaStyles.resultValue}>{addressData.localidade}</Text></Text>
          <Text style={CepConsultaStyles.resultLabel}>Estado: <Text style={CepConsultaStyles.resultValue}>{addressData.uf}</Text></Text>
        </View>
      )}

      {loading && (
        <ActivityIndicator size="large" color="#007bff" style={CepConsultaStyles.loadingIndicator} />
      )}
    </View>
  );
};

export default CepConsultaScreen;