import React from 'react';
import CurrencyConverter from '../../components/CurrencyConverter';
// import RealToDollarStyles from '../styles/RealToDollarStyles'; // Você pode usar se tiver estilos específicos para esta tela

const RealToDollarScreen = () => {
  return (
    <CurrencyConverter
      fromCurrency="BRL"
      toCurrency="USD"
      displayToCurrency="Dólar Americano"
    />
  );
};

export default RealToDollarScreen;