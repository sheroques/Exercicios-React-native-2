import { StyleSheet } from 'react-native';

const FormacaoStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#333',
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  degree: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007bff',
    marginBottom: 5,
  },
  institution: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 5,
  },
  year: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
});

export default FormacaoStyles;