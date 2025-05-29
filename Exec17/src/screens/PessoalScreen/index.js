import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import PessoalStyles from './styles'; // Importa a folha de estilo

const PessoalScreen = () => {
  return (
    <ScrollView style={PessoalStyles.container}>
      <Text style={PessoalStyles.title}>Dados Pessoais</Text>
      <Text style={PessoalStyles.text}>Nome: Seu Nome Completo</Text>
      <Text style={PessoalStyles.text}>Idade: XX anos</Text>
      <Text style={PessoalStyles.text}>Nacionalidade: Brasileira</Text>
      <Text style={PessoalStyles.text}>Cidade: Sua Cidade</Text>
      <Text style={PessoalStyles.text}>Estado: Seu Estado</Text>
      <Text style={PessoalStyles.text}>Email: seu.email@example.com</Text>
      <Text style={PessoalStyles.text}>Telefone: (XX) XXXX-XXXX</Text>
      {/* Adicione mais informações pessoais aqui */}
    </ScrollView>
  );
};

export default PessoalScreen;