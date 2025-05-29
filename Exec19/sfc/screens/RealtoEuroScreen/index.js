import React from 'react';
import CurrencyConverter from '../../components/CurrencyConverter';
// import RealToEuroStyles from '../styles/RealToEuroStyles'; // Você pode usar se tiver estilos específicos para esta tela

const RealToEuroScreen = () => {
  return (
    <CurrencyConverter
      fromCurrency="BRL"
      toCurrency="EUR"
      displayToCurrency="Euro"
    />
  );
};

export default RealToEuroScreen;