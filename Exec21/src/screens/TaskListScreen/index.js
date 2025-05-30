import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import TaskItem from '../../components/Taskitem';
import TaskListStyles from './styles';
// import CommonStyles from '../styles/CommonStyles';


const TaskListScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
      Alert.alert('Erro', 'Não foi possível carregar as tarefas.');
    }
  };

  const saveTasks = async (updatedTasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Erro ao salvar tarefas:', error);
      Alert.alert('Erro', 'Não foi possível salvar as tarefas.');
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadTasks();
    }, [])
  );

  const handleAddTask = () => {
    navigation.navigate('TaskForm');
  };

  const handleEditTask = (task) => {
    navigation.navigate('TaskForm', { task });
  };

  const handleDeleteTask = (id) => {
    Alert.alert(
      'Excluir Tarefa',
      'Tem certeza que deseja excluir esta tarefa?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => {
            const updatedTasks = tasks.filter((task) => task.id !== id);
            saveTasks(updatedTasks);
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const handleToggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks(updatedTasks);
  };

  return (
    <View style={TaskListStyles.container}>
      {tasks.length === 0 ? (
        <Text style={TaskListStyles.emptyListText}>Nenhuma tarefa cadastrada. Adicione uma nova!</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onToggle={handleToggleTask}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          )}
          contentContainerStyle={TaskListStyles.flatListContent}
        />
      )}

      <TouchableOpacity
        style={TaskListStyles.fab}
        onPress={handleAddTask}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default TaskListScreen;