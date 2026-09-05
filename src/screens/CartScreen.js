import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import { formatCurrency } from '../utils/formatCurrency';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function CartScreen({ navigation }) {
  const { itens, removerDoCarrinho, calcularTotal, limparCarrinho } = useCart();
  const { registrarCompras } = useAuth();

  function handleFinalizar() {
    // finaliza o pedido e gera uma compra por produto.
    registrarCompras(itens);
    limparCarrinho();
    navigation.navigate('PedidoFinalizado');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu carrinho</Text>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.itemId}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <CartItem item={item} onRemove={() => removerDoCarrinho(item.itemId)} />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Seu carrinho está vazio.</Text>
        }
      />

      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>{formatCurrency(calcularTotal())}</Text>
        </View>
        <Button
          title="Finalizar pedido"
          variant="secondary"
          onPress={handleFinalizar}
          disabled={itens.length === 0}
        />
      </View>
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
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1B5E20',
    marginBottom: 16,
  },
  empty: {
    textAlign: 'center',
    color: '#9E9E9E',
    marginTop: 40,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 14,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  totalLabel: {
    fontSize: 15,
    color: '#424242',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#212121',
  },
});
