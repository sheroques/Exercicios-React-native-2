import React from 'react';
import CurrencyConverter from '../../components/CurrencyConverter';
// import RealToBitcoinStyles from '../styles/RealToBitcoinStyles'; // Você pode usar se tiver estilos específicos para esta tela

const RealToBitcoinScreen = () => {
  return (
    <CurrencyConverter
      fromCurrency="BRL"
      toCurrency="BTC"
      displayToCurrency="Bitcoin"
    />
  );
};

export default RealToBitcoinScreen;