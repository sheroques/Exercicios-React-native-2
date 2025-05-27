import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const DetalhesVaga = ({ vaga }) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.titulo}>{vaga.titulo}</Text>
      <Text style={styles.label}>Salário:</Text>
      <Text style={styles.info}>{vaga.salario}</Text>
      <Text style={styles.label}>Descrição:</Text>
      <Text style={styles.info}>{vaga.descricao}</Text>
      <Text style={styles.label}>Contato:</Text>
      <Text style={styles.info}>{vaga.contato}</Text>
    </View>
  );
};

export default DetalhesVaga;