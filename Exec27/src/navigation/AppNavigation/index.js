import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TaskListScreen from '../../screens/TaskListScreen';
import TaskFormScreen from '../../screens/TaskFormScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TaskList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4a4a4a', // Cor de fundo do cabeçalho
        },
        headerTintColor: '#fff', // Cor do texto do cabeçalho
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="TaskList"
        component={TaskListScreen}
        options={{ title: 'Tarefas' }}
      />
      <Stack.Screen
        name="TaskForm"
        component={TaskFormScreen}
        options={({ route }) => ({
          title: route.params?.task ? 'Editar Tarefa' : 'Adicionar Tarefa',
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;