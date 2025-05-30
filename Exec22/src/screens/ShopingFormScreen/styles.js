import { StyleSheet } from 'react-native';

const ShoppingFormStyles = StyleSheet.create({
  container: { // VERIFIQUE SE ESTÁ DEFINIDO
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: { // VERIFIQUE SE ESTÁ DEFINIDO
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 6,
  },
  label: { // VERIFIQUE SE ESTÁ DEFINIDO
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#343a40',
  },
  input: { // VERIFIQUE SE ESTÁ DEFINIDO
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#495057',
    marginBottom: 20,
  },
  buttonGroup: { // VERIFIQUE SE ESTÁ DEFINIDO
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  cancelButton: { // VERIFIQUE SE ESTÁ DEFINIDO
    backgroundColor: '#6c757d',
  },
  cancelButtonText: { // VERIFIQUE SE ESTÁ DEFINIDO
    color: '#fff',
  },
  saveButton: { // VERIFIQUE SE ESTÁ DEFINIDO
    backgroundColor: '#007bff',
  },
});

export default ShoppingFormStyles;