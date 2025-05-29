import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Para ícones bonitos nas abas

// Importe seus componentes de tela
import RealToDollarScreen from '../../screens/RealtoDollarScreen';
import RealToEuroScreen from '../../screens/RealtoEuroScreen';
import RealToBitcoinScreen from '../../screens/RealtoBitcoinScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dólar') {
            iconName = focused ? 'cash' : 'cash-outline';
          } else if (route.name === 'Euro') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Bitcoin') {
            iconName = focused ? 'logo-bitcoin' : 'logo-bitcoin';
          }
          // Você pode retornar qualquer componente que desejar aqui!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#f0f0f0', height: 60, paddingBottom: 5 }, // Ajuste a altura e padding
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
        headerShown: false, // Oculta o cabeçalho padrão das telas
      })}
    >
      <Tab.Screen name="Dólar" component={RealToDollarScreen} />
      <Tab.Screen name="Euro" component={RealToEuroScreen} />
      <Tab.Screen name="Bitcoin" component={RealToBitcoinScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;