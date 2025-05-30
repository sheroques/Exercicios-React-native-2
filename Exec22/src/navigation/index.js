import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importe suas telas
import ShoppingListScreen from '../screens/ShopingListScreen';
import ShoppingFormScreen from '../screens/ShopingFormScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ShoppingList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007bff', // Cor de fundo do cabeçalho
        },
        headerTintColor: '#fff', // Cor do texto do cabeçalho
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false, // Oculta o título do botão de voltar no iOS
      }}
    >
      <Stack.Screen
        name="ShoppingList"
        component={ShoppingListScreen}
        options={{ title: 'Lista de Compras' }}
      />
      <Stack.Screen
        name="ShoppingForm"
        component={ShoppingFormScreen}
        options={({ route }) => ({
          title: route.params?.item ? 'Editar Item' : 'Adicionar Item',
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;