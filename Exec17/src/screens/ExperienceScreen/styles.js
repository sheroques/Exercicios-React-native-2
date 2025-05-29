import { StyleSheet } from 'react-native';

const ExperienciaStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#edf2f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#2d3748',
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  position: {
    fontSize: 19,
    fontWeight: '700',
    color: '#1a202c',
    marginBottom: 5,
  },
  company: {
    fontSize: 17,
    fontStyle: 'italic',
    color: '#4a5568',
    marginBottom: 5,
  },
  period: {
    fontSize: 15,
    color: '#718096',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#2d3748',
    lineHeight: 24,
  },
});

export default ExperienciaStyles;