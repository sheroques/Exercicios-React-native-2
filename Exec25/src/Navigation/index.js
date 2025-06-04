import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MovieListScreen from '../Screens/MovieListScreen';
import MovieDetailScreen from '../Screens/MovieDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MovieList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#343a40', // Cor de fundo do cabeçalho
        },
        headerTintColor: '#fff', // Cor do texto do cabeçalho
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false, // Oculta o título do botão de voltar no iOS
      }}
    >
      <Stack.Screen
        name="MovieList"
        component={MovieListScreen}
        options={{ title: 'App de Filmes' }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={({ route }) => ({
          title: `${route.params?.title || 'Filme'} - Sinopse`,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;