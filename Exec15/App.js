import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListaVagasScreen from './src/screens/ListaVagasScreen';
import DetalhesVagaScreen from './src/screens/DetalhesVagaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaVagas">
        <Stack.Screen
          name="ListaVagas"
          component={ListaVagasScreen}
          options={{ title: 'Vagas de TI' }}
        />
        <Stack.Screen
          name="DetalhesVaga"
          component={DetalhesVagaScreen}
          options={{ title: 'Detalhes da Vaga' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}