import { StyleSheet } from 'react-native';

const MovieDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    padding: 20,
  },
  movieImageDetail: {
    width: '100%',
    height: 300, // Altura ajustável para a imagem detalhada
    borderRadius: 10,
    marginBottom: 20,
  },
  movieTitleDetail: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  synopsisTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  synopsisText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
});

export default MovieDetailStyles;