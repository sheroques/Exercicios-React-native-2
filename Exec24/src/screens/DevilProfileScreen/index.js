import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator, Alert, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import DevProfileStyles from './styles';

const DevProfileScreen = () => {
  const [githubLogin, setGithubLogin] = useState('');
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState(null); // Para armazenar os dados do perfil

  const handleSearch = async () => {
    Keyboard.dismiss(); // Esconde o teclado
    if (githubLogin.trim() === '') {
      Alert.alert('Login Inválido', 'Por favor, digite um login do GitHub.');
      return;
    }

    setLoading(true);
    setProfileData(null); // Limpa os dados anteriores

    try {
      const response = await axios.get(`https://api.github.com/users/${githubLogin.trim()}`);
      const data = response.data; // Axios já retorna os dados no .data

      setProfileData(data);
    } catch (error) {
      console.error('Erro ao consultar perfil:', error);
      if (error.response && error.response.status === 404) {
        Alert.alert('Perfil Não Encontrado', 'O login do GitHub digitado não existe.');
      } else {
        Alert.alert('Erro na Consulta', 'Não foi possível consultar o perfil. Verifique sua conexão ou tente novamente.');
      }
      setProfileData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={DevProfileStyles.container}>
      <Text style={DevProfileStyles.title}>Perfil dos Devs</Text>

      {profileData && (
        <Image
          source={{ uri: profileData.avatar_url }}
          style={DevProfileStyles.profileImage}
        />
      )}
      {!profileData && !loading && (
        <View style={DevProfileStyles.placeholderImageContainer}>
             <Ionicons name="logo-github" size={80} color="#666" />
        </View>
      )}

      <View style={DevProfileStyles.inputContainer}>
        <TextInput
          style={DevProfileStyles.loginInput}
          placeholder="Digite o login git..."
          value={githubLogin}
          onChangeText={setGithubLogin}
          autoCapitalize="none" // Logins do GitHub geralmente são minúsculos
          autoCorrect={false}
        />
        <TouchableOpacity
          style={DevProfileStyles.searchButton}
          onPress={handleSearch}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Ionicons name="checkmark" size={30} color="#fff" />
          )}
        </TouchableOpacity>
      </View>

      {profileData && (
        <View style={DevProfileStyles.resultContainer}>
          <Text style={DevProfileStyles.resultLabel}>Id: <Text style={DevProfileStyles.resultValue}>{profileData.id}</Text></Text>
          <Text style={DevProfileStyles.resultLabel}>Nome: <Text style={DevProfileStyles.resultValue}>{profileData.name || 'N/A'}</Text></Text>
          <Text style={DevProfileStyles.resultLabel}>Repositórios: <Text style={DevProfileStyles.resultValue}>{profileData.public_repos}</Text></Text>
          <Text style={DevProfileStyles.resultLabel}>Criado em: <Text style={DevProfileStyles.resultValue}>{new Date(profileData.created_at).toLocaleDateString('pt-BR')}</Text></Text>
          <Text style={DevProfileStyles.resultLabel}>Seguidores: <Text style={DevProfileStyles.resultValue}>{profileData.followers}</Text></Text>
          <Text style={DevProfileStyles.resultLabel}>Seguindo: <Text style={DevProfileStyles.resultValue}>{profileData.following}</Text></Text>
        </View>
      )}

      {loading && (
        <ActivityIndicator size="large" color="#007bff" style={DevProfileStyles.loadingIndicator} />
      )}
    </View>
  );
};

export default DevProfileScreen;