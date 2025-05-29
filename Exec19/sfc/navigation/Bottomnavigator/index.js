import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context'; // Para lidar com a área segura

// Importe seus componentes de tela
import RealToDollarScreen from '../../screens/RealtoDollarScreen';
import RealToEuroScreen from '../../screens/RealtoEuroScreen';
import RealToBitcoinScreen from '../../screens/RealtoBitcoinScreen';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  const insets = useSafeAreaInsets(); // Hook para obter as insets da área segura

  return (
    <Tab.Navigator
      initialRouteName="Dólar"
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        tabBarStyle: {
          backgroundColor: '#f0f0f0',
          marginTop: insets.top, // Adiciona margem superior para evitar sobreposição com a barra de status
        },
        tabBarIndicatorStyle: { backgroundColor: 'blue', height: 2 },
      }}
    >
      <Tab.Screen name="Dólar" component={RealToDollarScreen} />
      <Tab.Screen name="Euro" component={RealToEuroScreen} />
      <Tab.Screen name="Bitcoin" component={RealToBitcoinScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;