import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import DetalhesVaga from '../../components/DetalhesVaga';

const DetalhesVagaScreen = ({ route }) => {
  const { vaga } = route.params;

  return (
    <ScrollView style={styles.container}>
      <DetalhesVaga vaga={vaga} />
    </ScrollView>
  );
};

export default DetalhesVagaScreen;