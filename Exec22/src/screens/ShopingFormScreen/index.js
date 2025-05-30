// screens/ShoppingFormScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShoppingFormStyles from './styles';
import CommonStyles from '../../components/ComonStyles/styles';

const ShoppingFormScreen = ({ navigation, route }) => {
  const existingItem = route.params?.item;
  
  // Adicione logs para verificar o item existente e os estados iniciais
  console.log('ShoppingFormScreen: existingItem:', existingItem);
  
  const [mercadoria, setMercadoria] = useState(existingItem ? existingItem.mercadoria : '');
  const [quantidade, setQuantidade] = useState(existingItem ? existingItem.quantidade.toString() : '');

  console.log('ShoppingFormScreen: Estado inicial - mercadoria:', mercadoria, 'quantidade:', quantidade);

  useEffect(() => {
    if (existingItem) {
      setMercadoria(existingItem.mercadoria);
      setQuantidade(existingItem.quantidade.toString());
      console.log('ShoppingFormScreen: useEffect - Definindo estados com item existente.');
    }
  }, [existingItem]);

  const handleSaveItem = async () => {
    // ... sua lógica de validação e salvamento
  };

  return (
    <KeyboardAvoidingView
      style={ShoppingFormStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={ShoppingFormStyles.innerContainer}>
        <Text style={ShoppingFormStyles.label}>Mercadoria</Text>
        <TextInput
          style={ShoppingFormStyles.input}
          placeholder="Ex: Tomate"
          value={mercadoria}
          onChangeText={setMercadoria}
          autoFocus={true}
        />

        <Text style={ShoppingFormStyles.label}>Quantidade</Text>
        <TextInput
          style={ShoppingFormStyles.input}
          placeholder="Ex: 2 ou 5kg"
          keyboardType="default"
          value={quantidade}
          onChangeText={setQuantidade}
        />

        <View style={ShoppingFormStyles.buttonGroup}>
          <TouchableOpacity
            style={[CommonStyles.button, ShoppingFormStyles.cancelButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={[CommonStyles.buttonText, ShoppingFormStyles.cancelButtonText]}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[CommonStyles.button, ShoppingFormStyles.saveButton]}
            onPress={handleSaveItem}
          >
            <Text style={CommonStyles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ShoppingFormScreen;