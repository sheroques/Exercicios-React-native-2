import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import FormacaoStyles from './styles'; // Importa a folha de estilo

const FormacaoScreen = () => {
  return (
    <ScrollView style={FormacaoStyles.container}>
      <Text style={FormacaoStyles.title}>Minha Formação Acadêmica</Text>

      <View style={FormacaoStyles.itemContainer}>
        <Text style={FormacaoStyles.degree}>Bacharelado em Ciência da Computação</Text>
        <Text style={FormacaoStyles.institution}>Universidade XYZ</Text>
        <Text style={FormacaoStyles.year}>201X - 201Y</Text>
        <Text style={FormacaoStyles.description}>
          Desenvolvimento de software, estruturas de dados, algoritmos, redes de computadores, etc.
        </Text>
      </View>

      <View style={FormacaoStyles.itemContainer}>
        <Text style={FormacaoStyles.degree}>Pós-Graduação em Desenvolvimento Mobile</Text>
        <Text style={FormacaoStyles.institution}>Faculdade ABC</Text>
        <Text style={FormacaoStyles.year}>202X - 202Y</Text>
        <Text style={FormacaoStyles.description}>
          Foco em React Native, iOS e Android nativo, UI/UX para dispositivos móveis.
        </Text>
      </View>

      {/* Adicione mais detalhes de educação */}
    </ScrollView>
  );
};

export default FormacaoScreen;