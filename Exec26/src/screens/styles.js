import { StyleSheet } from 'react-native';

const CurrencyConverterStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f2f5',
    alignItems: 'center',
    paddingTop: 80, // Espaço para o cabeçalho
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#343a40',
  },
  currencySelector: {
    flexDirection: 'row',
    marginBottom: 30,
    borderColor: '#007bff',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden', // Para que os bordas arredondadas funcionem
  },
  currencyButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#e9ecef', // Cor de fundo padrão
  },
  currencyButtonSelected: {
    backgroundColor: '#007bff', // Cor de fundo quando selecionado
  },
  currencyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  currencyButtonTextSelected: {
    color: '#fff', // Cor do texto quando selecionado
  },
  input: {
    width: '90%',
    height: 60,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 22,
    color: '#343a40',
    textAlign: 'center',
    marginBottom: 30,
    backgroundColor: '#fff',
  },
  convertButton: {
    width: '90%',
    height: 60,
    backgroundColor: '#28a745', // Cor verde para o botão Converter
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  convertButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultLabel: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
    paddingBottom: 5,
  },
  resultText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007bff',
    marginTop: 10,
  },
});

export default CurrencyConverterStyles;