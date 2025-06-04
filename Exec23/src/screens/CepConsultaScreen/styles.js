import { StyleSheet } from 'react-native';

const CepConsultaStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    paddingTop: 80, // Espaço para o cabeçalho
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#343a40',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  cepInput: {
    flex: 1,
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  searchButton: {
    width: 50,
    height: 50,
    backgroundColor: '#28a745', // Cor verde para o botão de busca
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  resultLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#495057',
  },
  resultValue: {
    fontWeight: 'normal',
    color: '#343a40',
  },
  loadingIndicator: {
    marginTop: 20,
  },
});

export default CepConsultaStyles;