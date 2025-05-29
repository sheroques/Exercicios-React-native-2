import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  temaClaro: {
    backgroundColor: '#fff',
    color: '#000',
  },
  temaEscuro: {
    backgroundColor: '#333',
    color: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 18,
  },
  frase: {
    textAlign: 'center',
    marginTop: 30,
  },
  fontePequena: {
    fontSize: 16,
  },
  fonteGrande: {
    fontSize: 24,
  },
});

export default styles;