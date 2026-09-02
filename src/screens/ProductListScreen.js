import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import ProductCard from '../components/ProductCard';
import AssistantButton from '../assistant/AssistantButton';
import { mockProducts } from '../data/mockProducts';
import { useCart } from '../context/CartContext';

export default function ProductListScreen({ navigation }) {
  const { adicionarAoCarrinho, itens } = useCart();
  const [busca, setBusca] = useState('');

  const produtosFiltrados = useMemo(() => {
    if (!busca.trim()) return mockProducts;
    const termo = busca.toLowerCase();
    return mockProducts.filter((p) => p.nome.toLowerCase().includes(termo));
  }, [busca]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Produtos</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Carrinho')}>
          <Text style={styles.cartLink}>Carrinho ({itens.length})</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 90 }}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('DetalheProduto', { product: item })}
            onAddToCart={() => adicionarAoCarrinho(item)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhum produto encontrado.</Text>
        }
      />

      <AssistantButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
    paddingTop: 48,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1B5E20',
  },
  cartLink: {
    color: '#2E7D32',
    fontWeight: '600',
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  empty: {
    textAlign: 'center',
    color: '#9E9E9E',
    marginTop: 40,
  },
});
