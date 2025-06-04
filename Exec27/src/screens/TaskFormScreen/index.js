import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import axios from 'axios';
import TaskFormStyles from './styles';
import CommonStyles from '../../commonstyles/styles';

const API_BASE_URL = 'https://tarefa-backend.onrender.com/tasks';

const TaskFormScreen = ({ navigation, route }) => {
  const existingTask = route.params?.task; // Se houver uma tarefa para editar
  const [taskName, setTaskName] = useState(existingTask ? existingTask.nome : '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (existingTask) {
      setTaskName(existingTask.nome);
    }
  }, [existingTask]);

  const handleSaveTask = async () => {
    if (taskName.trim() === '') {
      Alert.alert('Erro', 'O nome da tarefa não pode ser vazio.');
      return;
    }

    setLoading(true);

    try {
      if (existingTask) {
        // Atualizar tarefa existente (PUT)
        await axios.put(`${API_BASE_URL}/${existingTask.id}`, {
          id: existingTask.id, // A API pode exigir o ID no corpo para PUT
          nome: taskName.trim(),
          concluido: existingTask.concluido, // Mantém o status original
        });
        Alert.alert('Sucesso', 'Tarefa atualizada com sucesso!');
      } else {
        // Adicionar nova tarefa (POST)
        await axios.post(API_BASE_URL, {
          nome: taskName.trim(),
          concluido: false, // Nova tarefa começa como não concluída
        });
        Alert.alert('Sucesso', 'Tarefa adicionada com sucesso!');
      }
      navigation.goBack(); // Retorna para a lista de tarefas
    } catch (error) {
      console.error('Erro ao salvar tarefa:', error.response?.data || error.message);
      Alert.alert('Erro', 'Não foi possível salvar a tarefa. Verifique o console para mais detalhes.');
    } finally {
      setLoading(false);
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
          placeholder="Ex: Estudar React Native"
          value={taskName}
          onChangeText={setTaskName}
          autoFocus={true}
        />

        <View style={TaskFormStyles.buttonGroup}>
          <TouchableOpacity
            style={[CommonStyles.button, TaskFormStyles.cancelButton]}
            onPress={() => navigation.goBack()}
            disabled={loading}
          >
            <Text style={[CommonStyles.buttonText, TaskFormStyles.cancelButtonText]}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[CommonStyles.button, TaskFormStyles.saveButton]}
            onPress={handleSaveTask}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={CommonStyles.buttonText}>Salvar</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TaskFormScreen;