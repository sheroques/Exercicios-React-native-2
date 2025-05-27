import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import InputField from '../../components/InputField/index';
import SelectField from '../../components/SelectField';
import SliderField from '../../components/SliderField';
import SwitchField from '../../components/SwitchField';
import SubmitButton from '../../components/SubmitButton';

export default function FormScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('Masculino');
  const [escolaridade, setEscolaridade] = useState('Médio');
  const [limite, setLimite] = useState(100);
  const [brasileiro, setBrasileiro] = useState(false);

  return (
    <View style={styles.container}>
      <InputField label="Nome" value={nome} onChangeText={setNome} />
      <InputField label="Idade" value={idade} onChangeText={setIdade} keyboardType="numeric" />
      <SelectField label="Sexo" selectedValue={sexo} onValueChange={setSexo} options={["Masculino", "Feminino"]} />
      <SelectField label="Escolaridade" selectedValue={escolaridade} onValueChange={setEscolaridade} options={["Fundamental", "Médio", "Superior"]} />
      <SliderField label="Limite" value={limite} onValueChange={setLimite} />
      <SwitchField label="Brasileiro" value={brasileiro} onValueChange={setBrasileiro} />
      <SubmitButton onPress={() => navigation.navigate('Resultado', { nome, idade, sexo, escolaridade, limite, brasileiro })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});