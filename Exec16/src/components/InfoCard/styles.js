import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '100%', // Largura adaptativa
    maxWidth: 600, // Limita a largura máxima em telas maiores
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20, // Espaço inferior para múltiplos cards, se for o caso
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoItem: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 2,
  },
  value: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
});

export default styles;