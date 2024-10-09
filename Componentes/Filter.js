import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

// Dados dos produtos
const products = [
  { id: '1', name: 'Google Pixel', category: 'Phones', price: 699, image: require('../assets/googlepixel.png') },
  { id: '2', name: 'Pixel Buds', category: 'Earbuds', price: 199, image: require('../assets/pixelbuds.png') },
  { id: '3', name: 'Nest Hub', category: 'Devices', price: 129, image: require('../assets/nesthub.png') },
];

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const categories = ['All', 'Phones', 'Earbuds', 'Devices'];
  const orderBy = ['Price', 'Name'];

  // Filtra os produtos pela categoria selecionada
  const filteredProducts = products.filter((product) => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  // Ordena os produtos com base na seleção
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedOrder === 'Price') {
      return a.price - b.price;
    }
    if (selectedOrder === 'Name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  // Função para definir a categoria e ordenar os produtos
  const selectCategory = (category) => setSelectedCategory(category);
  const selectOrder = (order) => setSelectedOrder(order);

  return (
    <View style={styles.container}>
      {/* Filtros de categoria */}
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedCategory === item,
            ]}
            onPress={() => selectCategory(item)}
          >
            <Text
              style={[
                styles.filterText,
                selectedCategory === item && styles.selectedFilterText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Ordenar por Preço ou Nome */}
      <FlatList
        data={orderBy}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.orderButton,
              selectedOrder === item,
            ]}
            onPress={() => selectOrder(item)}
          >
            <Text
              style={[
                styles.orderText,
                selectedOrder === item && styles.selectedOrderText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Lista de produtos filtrados e ordenados */}
      <FlatList
        data={sortedProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} /> {/* Alterado aqui */}
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
  },
  filterButton: {
    color: 'black',
    padding: 12,
    marginHorizontal: 5,
  },
  filterText: {
    color: '#121212',
    fontSize: 16,
  },
  selectedFilterText: {
    color: '#4285f4',
  },
  orderButton: {
    color: 'black',
    padding: 12,
    marginHorizontal: 5,
  },
  orderText: {
    color: '#121212',
    fontSize: 16,
  },
  selectedOrderText: {
    color: '#4285f4',
  },
  productContainer: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  productImage: {
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  addToCartButton: {
    backgroundColor: '#4285f4',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Filter;