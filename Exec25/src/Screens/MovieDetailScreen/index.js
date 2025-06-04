// screens/MovieDetailScreen.js

import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import MovieDetailStyles from './styles';

const MovieDetailScreen = ({ route }) => {
  // Certifique-se de que está desestruturando corretamente 'movie' de 'route.params'
  const { movie } = route.params;

  // Adicione um console.log para verificar o objeto 'movie' recebido
  console.log('MovieDetailScreen: Filme recebido:', movie);

  // Verifique se 'movie' existe antes de tentar acessar suas propriedades
  if (!movie) {
    return (
      <View style={MovieDetailStyles.container}>
        <Text style={MovieDetailStyles.errorText}>Erro: Informações do filme não disponíveis.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={MovieDetailStyles.container}>
      <Image
        source={{ uri: movie.foto }}
        style={MovieDetailStyles.movieImageDetail}
        resizeMode="contain"
      />
      <Text style={MovieDetailStyles.movieTitleDetail}>{movie.nome}</Text>
      <Text style={MovieDetailStyles.synopsisTitle}>Sinopse:</Text>
      <Text style={MovieDetailStyles.synopsisText}>{movie.sinopse}</Text>
    </ScrollView>
  );
};

export default MovieDetailScreen;