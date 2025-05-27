import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultScreen({ route }) {
  const { nome, idade, sexo, escolaridade, limite, brasileiro } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados Informados</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Sexo: {sexo}</Text>
      <Text>Escolaridade: {escolaridade}</Text>
      <Text>Limite: {limite.toFixed(0)}</Text>
      <Text>Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#00f',
  },
});