import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Button from '../components/Button';
import { formatCurrency } from '../utils/formatCurrency';
import { useCart } from '../context/CartContext';

// Repare como o produto chega aqui: via "route.params", que é como
// o React Navigation passa dados de uma tela para outra.
export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;
  const { adicionarAoCarrinho } = useCart();
  const temPromocao = product.precoPromocional != null;

  function handleAdicionar() {
    adicionarAoCarrinho(product);
    Alert.alert('Adicionado', `${product.nome} foi ao carrinho.`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageLabel}>IMG</Text>
      </View>

      <Text style={styles.nome}>{product.nome}</Text>
      <Text style={styles.tipo}>{product.tipo}</Text>

      <View style={styles.precoRow}>
        {temPromocao ? (
          <>
            <Text style={styles.precoRiscado}>
              {formatCurrency(product.precoAtual)}
            </Text>
            <Text style={styles.precoPromo}>
              {formatCurrency(product.precoPromocional)}
            </Text>
          </>
        ) : (
          <Text style={styles.preco}>{formatCurrency(product.precoAtual)}</Text>
        )}
      </View>

      <Text style={styles.descricao}>{product.descricao}</Text>

      {product.dataValidade && (
        <Text style={styles.validade}>
          Validade: {new Date(product.dataValidade).toLocaleDateString('pt-BR')}
        </Text>
      )}

      <View style={styles.buttons}>
        <Button title="Adicionar ao carrinho" onPress={handleAdicionar} />
        <View style={{ height: 10 }} />
        <Button
          title="Ver carrinho"
          variant="secondary"
          onPress={() => navigation.navigate('Carrinho')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 24,
  },
  imagePlaceholder: {
    height: 180,
    borderRadius: 16,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageLabel: {
    color: '#81C784',
    fontWeight: '700',
    fontSize: 16,
  },
  nome: {
    fontSize: 20,
    fontWeight: '700',
    color: '#212121',
  },
  tipo: {
    fontSize: 13,
    color: '#757575',
    marginTop: 4,
  },
  precoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 14,
  },
  preco: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2E7D32',
  },
  precoRiscado: {
    fontSize: 15,
    color: '#9E9E9E',
    textDecorationLine: 'line-through',
  },
  precoPromo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#EF6C00',
  },
  descricao: {
    fontSize: 14,
    color: '#424242',
    marginTop: 16,
    lineHeight: 20,
  },
  validade: {
    fontSize: 12,
    color: '#9E9E9E',
    marginTop: 12,
  },
  buttons: {
    marginTop: 28,
  },
});
