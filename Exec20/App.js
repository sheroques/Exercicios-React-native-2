import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FraseScreen from './components/FraseScreen';

const App = () => {
  const [temaClaro, setTemaClaro] = useState(true);
  const [fontePequena, setFontePequena] = useState(true);

  useEffect(() => {
    carregarPreferencias();
  }, []);

  const carregarPreferencias = async () => {
    try {
      const temaSalvo = await AsyncStorage.getItem('temaClaro');
      const fonteSalva = await AsyncStorage.getItem('fontePequena');

      if (temaSalvo !== null) {
        setTemaClaro(temaSalvo === 'true');
      }
      if (fonteSalva !== null) {
        setFontePequena(fonteSalva === 'true');
      }
    } catch (error) {
      console.error('Erro ao carregar preferências:', error);
    }
  };

  const salvarPreferencias = async (novoTemaClaro, novaFontePequena) => {
    try {
      await AsyncStorage.setItem('temaClaro', novoTemaClaro.toString());
      await AsyncStorage.setItem('fontePequena', novaFontePequena.toString());
    } catch (error) {
      console.error('Erro ao salvar preferências:', error);
    }
    setTemaClaro(novoTemaClaro);
    setFontePequena(novaFontePequena);
  };

  return (
    <SafeAreaProvider>
      <FraseScreen
        temaClaro={temaClaro}
        fontePequena={fontePequena}
        onPreferenciasChange={salvarPreferencias}
      />
    </SafeAreaProvider>
  );
};

export default App;