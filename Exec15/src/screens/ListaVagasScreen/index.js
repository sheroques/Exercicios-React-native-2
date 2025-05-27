import React from 'react';
import { FlatList, View, Text } from 'react-native'; // Importamos FlatList
import styles from './styles';
import VagaCard from '../../components/VagaCard';

const vagasData = [
  {
    id: '1',
    titulo: 'Desenvolvedor Backend',
    salario: 'R$ 3.000,00',
    descricao: 'Desenvolvimento e manutenção de APIs RESTful usando Node.js e Express. Experiência com bancos de dados relacionais e NoSQL.',
    contato: 'contato@empresaX.com.br',
  },
  {
    id: '2',
    titulo: 'Engenheiro de Dados',
    salario: 'R$ 3.000,00',
    descricao: 'Criação e manutenção de pipelines de dados, ETL. Experiência com ferramentas como Apache Spark, Kafka e bancos de dados distribuídos.',
    contato: 'rh@empresaY.com',
  },
  {
    id: '3',
    titulo: 'Analista de QA',
    salario: 'R$ 2.500,00',
    descricao: 'Planejamento e execução de testes manuais e automatizados. Experiência com Selenium e Jest.',
    contato: 'vagas@techsolutions.net',
  },
  {
    id: '4',
    titulo: 'Designer UX/UI',
    salario: 'R$ 3.500,00',
    descricao: 'Criação de wireframes, protótipos e interfaces de usuário intuitivas. Experiência com Figma e Adobe XD.',
    contato: 'design@innovate.co',
  },
  {
    id: '5',
    titulo: 'Especialista em Cibersegurança',
    salario: 'R$ 4.000,00',
    descricao: 'Monitoramento de segurança, análise de vulnerabilidades e resposta a incidentes. Conhecimento em ISO 27001.',
    contato: 'security@example.com',
  },
  {
    id: '6',
    titulo: 'Arquiteto de Soluções Cloud',
    salario: 'R$ 5.000,00',
    descricao: 'Projetar e implementar soluções escaláveis em plataformas de nuvem (AWS, Azure, GCP). Certificações são um diferencial.',
    contato: 'cloud@enterprise.net',
  },
];

const ListaVagasScreen = ({ navigation }) => {
  const handleSaibaMais = (vaga) => {
    navigation.navigate('DetalhesVaga', { vaga });
  };

  const renderItem = ({ item }) => (
    <VagaCard vaga={item} onSaibaMais={handleSaibaMais} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vagas de TI</Text>
      <FlatList
        data={vagasData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default ListaVagasScreen;