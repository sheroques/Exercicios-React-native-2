import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskFormStyles from './styles';
import CommonStyles from '../../components/CommonStyles/styles'

const TaskFormScreen = ({ navigation, route }) => {
  const existingTask = route.params?.task; // Se houver uma tarefa para editar
  const [taskName, setTaskName] = useState(existingTask ? existingTask.name : '');

  useEffect(() => {
    // Define o nome da tarefa no input se estiver editando
    if (existingTask) {
      setTaskName(existingTask.name);
    }
  }, [existingTask]);

  const handleSaveTask = async () => {
    if (taskName.trim() === '') {
      Alert.alert('Erro', 'O nome da tarefa não pode ser vazio.');
      return;
    }

    try {
      let tasks = await AsyncStorage.getItem('tasks');
      tasks = tasks ? JSON.parse(tasks) : [];

      if (existingTask) {
        // Editar tarefa existente
        const updatedTasks = tasks.map((task) =>
          task.id === existingTask.id ? { ...task, name: taskName } : task
        );
        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
      } else {
        // Adicionar nova tarefa
        const newTask = {
          id: Date.now().toString(), // ID único baseado no timestamp
          name: taskName.trim(),
          completed: false,
        };
        tasks.push(newTask);
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      }
      navigation.goBack(); // Retorna para a lista de tarefas
    } catch (error) {
      console.error('Erro ao salvar/atualizar tarefa:', error);
      Alert.alert('Erro', 'Não foi possível salvar a tarefa.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={TaskFormStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={TaskFormStyles.innerContainer}>
        <Text style={TaskFormStyles.label}>Nome da Tarefa</Text>
        <TextInput
          style={TaskFormStyles.input}
          placeholder="Estudar React Native"
          value={taskName}
          onChangeText={setTaskName}
          autoFocus={true}
        />

        <View style={TaskFormStyles.buttonGroup}>
          <TouchableOpacity
            style={[CommonStyles.button, TaskFormStyles.cancelButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={[CommonStyles.buttonText, TaskFormStyles.cancelButtonText]}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[CommonStyles.button, TaskFormStyles.saveButton]}
            onPress={handleSaveTask}
          >
            <Text style={CommonStyles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TaskFormScreen;