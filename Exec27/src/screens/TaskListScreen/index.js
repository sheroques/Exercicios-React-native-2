import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import TaskItem from '../../components/TaskItem';
import TaskListStyles from './styles';

const API_BASE_URL = 'https://tarefa-backend.onrender.com/tasks';

const TaskListScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(API_BASE_URL);
      setTasks(response.data);
    } catch (err) {
      console.error('Erro ao buscar tarefas:', err);
      setError('Não foi possível carregar as tarefas. Verifique a API ou sua conexão.');
      Alert.alert('Erro', 'Não foi possível carregar as tarefas.');
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchTasks();
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
          onPress: async () => {
            try {
              setLoading(true);
              await axios.delete(`${API_BASE_URL}/${id}`);
              Alert.alert('Sucesso', 'Tarefa excluída com sucesso!');
              fetchTasks(); // Recarrega a lista
            } catch (err) {
              console.error('Erro ao excluir tarefa:', err);
              Alert.alert('Erro', 'Não foi possível excluir a tarefa.');
              setLoading(false);
            }
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const handleToggleTaskStatus = async (task) => {
    try {
      setLoading(true);
      const newStatus = !task.concluido; // Inverte o status
      await axios.patch(`${API_BASE_URL}/${task.id}`, { concluido: newStatus });
      Alert.alert('Sucesso', `Tarefa ${newStatus ? 'finalizada' : 'reaberta'}!`);
      fetchTasks(); // Recarrega a lista
    } catch (err) {
      console.error('Erro ao atualizar status da tarefa:', err);
      Alert.alert('Erro', 'Não foi possível atualizar o status da tarefa.');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={TaskListStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={TaskListStyles.loadingText}>Carregando tarefas...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={TaskListStyles.errorContainer}>
        <Text style={TaskListStyles.errorText}>{error}</Text>
        <TouchableOpacity style={TaskListStyles.retryButton} onPress={fetchTasks}>
          <Text style={TaskListStyles.retryButtonText}>Tentar Novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

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
              onToggle={handleToggleTaskStatus}
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