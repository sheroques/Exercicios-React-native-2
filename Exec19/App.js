import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // Importe o SafeAreaProvider
import TabNavigator from './sfc/navigation/Bottomnavigator'; // Ou BottomTabNavigator, dependendo do seu uso

export default function App() {
  return (
    <SafeAreaProvider> {/* Envolva toda a sua aplicação com SafeAreaProvider */}
      <NavigationContainer>
        <TabNavigator /> {/* Seu navegador principal */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}