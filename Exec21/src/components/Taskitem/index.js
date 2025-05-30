import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskListStyles from '../../screens/TaskListScreen/styles'; // Usando o estilo da lista para o item

const TaskItem = ({ task, onToggle, onEdit, onDelete }) => {
  return (
    <View style={TaskListStyles.taskItem}>
      <TouchableOpacity
        style={TaskListStyles.taskTextContainer}
        onPress={() => onToggle(task.id)}
      >
        <Text
          style={[
            TaskListStyles.taskText,
            task.completed && TaskListStyles.taskTextCompleted,
          ]}
        >
          {task.name}
        </Text>
      </TouchableOpacity>

      <View style={TaskListStyles.taskActions}>
        <TouchableOpacity onPress={() => onEdit(task)}>
          <Ionicons name="create-outline" size={24} color="#007bff" style={TaskListStyles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(task.id)}>
          <Ionicons name="trash-outline" size={24} color="#dc3545" style={TaskListStyles.actionIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;