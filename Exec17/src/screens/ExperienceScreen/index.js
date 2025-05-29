import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ExperienciaStyles from './styles'; // Importa a folha de estilo

const ExperienciaScreen = () => {
  return (
    <ScrollView style={ExperienciaStyles.container}>
      <Text style={ExperienciaStyles.title}>Minha Experiência Profissional</Text>

      <View style={ExperienciaStyles.itemContainer}>
        <Text style={ExperienciaStyles.position}>Desenvolvedor React Native Sênior</Text>
        <Text style={ExperienciaStyles.company}>Empresa Tech Solutions</Text>
        <Text style={ExperienciaStyles.period}>Jan 2022 - Presente</Text>
        <Text style={ExperienciaStyles.description}>
          - Liderança no desenvolvimento e manutenção de aplicativos móveis utilizando React Native.{"\n"}
          - Colaboração com equipes de design e backend para implementar novas funcionalidades.{"\n"}
          - Otimização de performance e debugging de aplicações.
        </Text>
      </View>

      <View style={ExperienciaStyles.itemContainer}>
        <Text style={ExperienciaStyles.position}>Desenvolvedor Mobile Pleno</Text>
        <Text style={ExperienciaStyles.company}>Startup Inovadora</Text>
        <Text style={ExperienciaStyles.period}>Mar 2019 - Dez 2021</Text>
        <Text style={ExperienciaStyles.description}>
          - Desenvolvimento de features para aplicativos híbridos com React Native.{"\n"}
          - Participação em code reviews e garantia de qualidade de código.{"\n"}
          - Integração com APIs RESTful.
        </Text>
      </View>

      {/* Adicione mais detalhes de experiência */}
    </ScrollView>
  );
};

export default ExperienciaScreen;