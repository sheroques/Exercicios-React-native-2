import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Importe seus componentes de tela
import PessoalScreen from '../../screens/PessoalScreen';
import FormacaoScreen from '../../screens/FormacaoScreen';
import ExperienciaScreen from '../../screens/ExperienceScreen';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Pessoal"
      screenOptions={{
        tabBarActiveTintColor: 'blue', // Personaliza a cor da aba ativa
        tabBarInactiveTintColor: 'gray', // Personaliza a cor da aba inativa
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#f0f0f0' }, // Personaliza o fundo da barra de abas
        tabBarIndicatorStyle: { backgroundColor: 'blue', height: 3 }, // Personaliza o indicador
      }}
    >
      <Tab.Screen name="Pessoal" component={PessoalScreen} />
      <Tab.Screen name="Formação" component={FormacaoScreen} />
      <Tab.Screen name="Experiência" component={ExperienciaScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;