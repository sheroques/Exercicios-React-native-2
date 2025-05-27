import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import InfoCard from '../../components/InfoCard';

const ExperienciaScreen = () => {
  const dadosExperiencia = {
    titulo: 'Experiência Profissional',
    itens: [
      { label: 'Empresa', value: 'Tech Solutions Ltda.' },
      { label: 'Cargo', value: 'Desenvolvedor React Native Sênior' },
      { label: 'Período', value: 'Jan 2020 - Atualmente' },
      { label: 'Descrição', value: 'Liderança de equipe, desenvolvimento de novos módulos e otimização de performance.' },
      { label: 'Empresa Anterior', value: 'Inovação Digital SA' },
      { label: 'Cargo Anterior', value: 'Desenvolvedor Frontend Pleno' },
      { label: 'Período Anterior', value: 'Mar 2015 - Dez 2019' },
      { label: 'Descrição Anterior', value: 'Desenvolvimento de interfaces web e mobile com ReactJS e Angular.' },
    ],
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          {/* <Text style={styles.header}>Experiência</Text> */}
          <InfoCard data={dadosExperiencia} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExperienciaScreen;