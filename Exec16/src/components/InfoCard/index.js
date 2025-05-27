import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const InfoCard = ({ data }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{data.titulo}</Text>
      {data.itens.map((item, index) => (
        <View key={index} style={styles.infoItem}>
          <Text style={styles.label}>{item.label}:</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
};

export default InfoCard;