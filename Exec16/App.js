import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import PessoalScreen from './src/screens/PessoalScreen';
import FormacaoScreen from './src/screens/FormacaoScreen';
import ExperienciaScreen from './src/screens/ExperienciaScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Pessoal') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Formação') {
              iconName = focused ? 'school' : 'school-outline';
            } else if (route.name === 'Experiência') {
              iconName = focused ? 'briefcase' : 'briefcase-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3498db', 
          tabBarInactiveTintColor: 'gray',  
          headerShown: true, 
        })}
      >
        <Tab.Screen name="Pessoal" component={PessoalScreen} />
        <Tab.Screen name="Formação" component={FormacaoScreen} />
        <Tab.Screen name="Experiência" component={ExperienciaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}