import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const VagaCard = ({ vaga, onSaibaMais }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.tituloVaga}>{vaga.titulo}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onSaibaMais(vaga)}>
        <Text style={styles.buttonText}>Saiba mais</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VagaCard;