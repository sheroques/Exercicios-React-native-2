import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import InfoCard from '../../components/InfoCard'; // Componente genérico para exibir informações

const PessoalScreen = () => {
  const dadosPessoais = {
    titulo: 'Informações Pessoais',
    itens: [
      { label: 'Nome Completo', value: 'Ana Paula Costa' },
      { label: 'Data de Nascimento', value: '15/03/1990' },
      { label: 'Telefone', value: '(11) 98765-4321' },
      { label: 'Email', value: 'ana.paula@example.com' },
      { label: 'Endereço', value: 'Rua das Flores, 123 - São Paulo, SP' },
      { label: 'Nacionalidade', value: 'Brasileira' },
      { label: 'Estado Civil', value: 'Solteira' },
    ],
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          {/* <Text style={styles.header}>Pessoal</Text> */}
          <InfoCard data={dadosPessoais} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PessoalScreen;