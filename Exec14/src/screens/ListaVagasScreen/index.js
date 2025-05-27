import React from 'react';
import { ScrollView, View, Text } from 'react-native';
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
    id: '4',
    titulo: 'Designer UX/UI',
    salario: 'R$ 3.500,00',
    descricao: 'Criação de wireframes, protótipos e interfaces de usuário intuitivas. Experiência com Figma e Adobe XD.',
    contato: 'design@innovate.co',
  },
  {
    id: '4',
    titulo: 'Designer UX/UI',
    salario: 'R$ 3.500,00',
    descricao: 'Criação de wireframes, protótipos e interfaces de usuário intuitivas. Experiência com Figma e Adobe XD.',
    contato: 'design@innovate.co',
  },
  {
    id: '4',
    titulo: 'Designer UX/UI',
    salario: 'R$ 3.500,00',
    descricao: 'Criação de wireframes, protótipos e interfaces de usuário intuitivas. Experiência com Figma e Adobe XD.',
    contato: 'design@innovate.co',
  },
  {
    id: '4',
    titulo: 'Designer UX/UI',
    salario: 'R$ 3.500,00',
    descricao: 'Criação de wireframes, protótipos e interfaces de usuário intuitivas. Experiência com Figma e Adobe XD.',
    contato: 'design@innovate.co',
  },
  {
    id: '4',
    titulo: 'Designer UX/UI',
    salario: 'R$ 3.500,00',
    descricao: 'Criação de wireframes, protótipos e interfaces de usuário intuitivas. Experiência com Figma e Adobe XD.',
    contato: 'design@innovate.co',
  },
];

const ListaVagasScreen = ({ navigation }) => {
  const handleSaibaMais = (vaga) => {
    navigation.navigate('DetalhesVaga', { vaga });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Vagas de TI</Text>
      {vagasData.map((vaga) => (
        <VagaCard key={vaga.id} vaga={vaga} onSaibaMais={handleSaibaMais} />
      ))}
    </ScrollView>
  );
};

export default ListaVagasScreen;