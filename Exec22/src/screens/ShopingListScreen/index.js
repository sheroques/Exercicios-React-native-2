import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ShoppingItem from '../../components/ShoppingItem';
import ShoppingListStyles from './styles';

const ShoppingListScreen = ({ navigation }) => {
  const [shoppingItems, setShoppingItems] = useState([]);

  const loadShoppingItems = async () => {
    try {
      const storedItems = await AsyncStorage.getItem('shoppingItems');
      if (storedItems) {
        setShoppingItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error('Erro ao carregar itens de compra:', error);
      Alert.alert('Erro', 'Não foi possível carregar os itens da lista.');
    }
  };

  const saveShoppingItems = async (updatedItems) => {
    try {
      await AsyncStorage.setItem('shoppingItems', JSON.stringify(updatedItems));
      setShoppingItems(updatedItems);
    } catch (error) {
      console.error('Erro ao salvar itens de compra:', error);
      Alert.alert('Erro', 'Não foi possível salvar os itens da lista.');
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadShoppingItems();
    }, [])
  );

  const handleAddItem = () => {
    navigation.navigate('ShoppingForm');
  };

  const handleEditItem = (item) => {
    navigation.navigate('ShoppingForm', { item });
  };

  const handleDeleteItem = (id) => {
    Alert.alert(
      'Excluir Item',
      'Tem certeza que deseja excluir este item da lista?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => {
            const updatedItems = shoppingItems.filter((item) => item.id !== id);
            saveShoppingItems(updatedItems);
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const handleTogglePurchased = (id) => {
    const updatedItems = shoppingItems.map((item) =>
      item.id === id ? { ...item, purchased: !item.purchased } : item
    );
    saveShoppingItems(updatedItems);
  };

  return (
    <View style={ShoppingListStyles.container}>
      {shoppingItems.length === 0 ? (
        <Text style={ShoppingListStyles.emptyListText}>Sua lista de compras está vazia. Adicione um item!</Text>
      ) : (
        <FlatList
          data={shoppingItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ShoppingItem
              item={item}
              onToggle={handleTogglePurchased}
              onEdit={handleEditItem}
              onDelete={handleDeleteItem}
            />
          )}
          contentContainerStyle={ShoppingListStyles.flatListContent}
        />
      )}

      <TouchableOpacity
        style={ShoppingListStyles.fab}
        onPress={handleAddItem}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingListScreen;