import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import products from '../../data/products';
import ProductCard from '../../components/ProductCard';
import styles from './styles'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Anúncios</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onPress={() => navigation.navigate('Details', { product })} 
          />
        ))}
      </ScrollView>
    </View>
  );
}
