import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ShoppingListStyles from '../../screens/ShopingListScreen/styles';

const ShoppingItem = ({ item, onToggle, onEdit, onDelete }) => {
  return (
    <View style={ShoppingListStyles.itemContainer}>
      <TouchableOpacity
        style={ShoppingListStyles.itemTextContainer}
        onPress={() => onToggle(item.id)}
      >
        <Text
          style={[
            ShoppingListStyles.itemText,
            item.purchased && ShoppingListStyles.itemTextPurchased,
          ]}
        >
          {item.mercadoria} ({item.quantidade})
        </Text>
      </TouchableOpacity>

      <View style={ShoppingListStyles.itemActions}>
        <TouchableOpacity onPress={() => onEdit(item)}>
          <Ionicons name="create-outline" size={24} color="#007bff" style={ShoppingListStyles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash-outline" size={24} color="#dc3545" style={ShoppingListStyles.actionIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShoppingItem;