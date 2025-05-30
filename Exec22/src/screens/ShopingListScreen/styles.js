import { StyleSheet } from 'react-native';

const ShoppingListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  flatListContent: {
    paddingBottom: 80, // Espaço para o FAB
  },
  itemContainer: { // Renomeado de taskItem
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  itemTextContainer: { // Renomeado de taskTextContainer
    flex: 1,
    marginRight: 10,
  },
  itemText: { // Renomeado de taskText
    fontSize: 18,
    color: '#343a40',
  },
  itemTextPurchased: { // Renomeado de taskTextCompleted
    textDecorationLine: 'line-through',
    color: '#6c757d',
  },
  itemActions: { // Renomeado de taskActions
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    marginLeft: 15,
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#28a745', // Cor verde para adicionar
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  emptyListText: {
    fontSize: 18,
    color: '#6c757d',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default ShoppingListStyles;