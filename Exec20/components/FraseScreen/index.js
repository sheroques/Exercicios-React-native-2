import React from 'react';
import { View, Text, Switch, StyleSheet, ScrollView } from 'react-native';
import styles from './styles';

const FraseScreen = ({ temaClaro, fontePequena, onPreferenciasChange }) => {
  const frase = "A vingança nunca é plena, mata a alma e envenena. (Seu Madruga)";

  const tema = temaClaro ? styles.temaClaro : styles.temaEscuro;
  const tamanhoFonte = fontePequena ? styles.fontePequena : styles.fonteGrande;

  return (
    <ScrollView style={[styles.container, tema]}>
      <Text style={styles.titulo}>Frases</Text>

      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, tema]}>Dia</Text>
        <Switch
          value={temaClaro}
          onValueChange={(novoTema) => onPreferenciasChange(novoTema, fontePequena)}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, tema]}>Pequeno</Text>
        <Switch
          value={fontePequena}
          onValueChange={(novaFonte) => onPreferenciasChange(temaClaro, novaFonte)}
        />
      </View>

      <Text style={[styles.frase, tema, tamanhoFonte]}>{frase}</Text>
    </ScrollView>
  );
};

export default FraseScreen;