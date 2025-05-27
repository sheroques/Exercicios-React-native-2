import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import InfoCard from '../../components/InfoCard';

const FormacaoScreen = () => {
  const dadosFormacao = {
    titulo: 'Formação Acadêmica',
    itens: [
      { label: 'Graduação', value: 'Bacharel em Ciência da Computação' },
      { label: 'Instituição', value: 'Universidade Federal de SP (USP)' },
      { label: 'Período', value: '2010 - 2014' },
      { label: 'Pós-Graduação', value: 'Especialização em Desenvolvimento Mobile' },
      { label: 'Instituição (Pós)', value: 'FIAP' },
      { label: 'Período (Pós)', value: '2016 - 2017' },
    ],
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          {/* <Text style={styles.header}>Formação</Text> */}
          <InfoCard data={dadosFormacao} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FormacaoScreen;