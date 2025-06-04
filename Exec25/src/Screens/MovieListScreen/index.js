// screens/MovieListScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import MovieListStyles from './styles';

const API_URL = 'https://sujeitoprogramador.com/r-api/?api=filmes';

const MovieListScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_URL);
        setMovies(response.data);
      } catch (err) {
        console.error('Erro ao buscar filmes:', err);
        setError('Não foi possível carregar os filmes. Verifique sua conexão.');
        Alert.alert('Erro', 'Não foi possível carregar os filmes. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleReadMore = (movie) => {
    // Certifique-se de que 'movie' está sendo passado como um parâmetro nomeado 'movie'
    console.log('Navegando para MovieDetail com filme:', movie.nome); // Log para depuração
    navigation.navigate('MovieDetail', { movie: movie, title: movie.nome }); // <--- VERIFIQUE AQUI
  };

  if (loading) {
    return (
      <View style={MovieListStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={MovieListStyles.loadingText}>Carregando filmes...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={MovieListStyles.errorContainer}>
        <Text style={MovieListStyles.errorText}>{error}</Text>
        <TouchableOpacity style={MovieListStyles.retryButton} onPress={() => { setLoading(true); setError(null); /* Recarrega */ }}>
          <Text style={MovieListStyles.retryButtonText}>Tentar Novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={MovieListStyles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={MovieListStyles.movieItem}>
            <Text style={MovieListStyles.movieTitle}>{item.nome}</Text>
            <Image
              source={{ uri: item.foto }}
              style={MovieListStyles.movieImage}
              resizeMode="cover"
            />
            <TouchableOpacity
              style={MovieListStyles.readMoreButton}
              onPress={() => handleReadMore(item)} // 'item' é o objeto do filme completo
            >
              <Text style={MovieListStyles.readMoreButtonText}>Leia mais</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={MovieListStyles.flatListContent}
      />
    </View>
  );
};

export default MovieListScreen;