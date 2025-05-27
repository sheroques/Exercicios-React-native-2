import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import styles from './styles'

export default function ProductCard({ product, onPress }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Button title="Ver detalhes" onPress={onPress} />
    </View>
  );
}
