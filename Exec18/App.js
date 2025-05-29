import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './sfc/navigation/Bottomnavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}