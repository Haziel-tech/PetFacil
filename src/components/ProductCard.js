import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { formatCurrency } from '../utils/formatCurrency';

// Card de produto usado na lista (RF03) e que dispara duas ações:
// - onPress: abre o detalhe do produto
// - onAddToCart: adiciona direto ao carrinho (RF04), sem precisar
//   entrar no detalhe — atalho comum em apps de compra.
export default function ProductCard({ product, onPress, onAddToCart }) {
  const temPromocao = product.precoPromocional != null;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageLabel}>IMG</Text>
        {temPromocao && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>promo</Text>
          </View>
        )}
      </View>

      <View style={styles.info}>
        <Text style={styles.nome} numberOfLines={2}>{product.nome}</Text>
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
      </View>

      <TouchableOpacity style={styles.addButton} onPress={onAddToCart}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  imagePlaceholder: {
    width: 64,
    height: 64,
    borderRadius: 10,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  imageLabel: {
    color: '#81C784',
    fontWeight: '600',
    fontSize: 11,
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#EF6C00',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212121',
  },
  tipo: {
    fontSize: 12,
    color: '#757575',
    marginTop: 2,
  },
  precoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    gap: 8,
  },
  preco: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2E7D32',
  },
  precoRiscado: {
    fontSize: 12,
    color: '#9E9E9E',
    textDecorationLine: 'line-through',
  },
  precoPromo: {
    fontSize: 14,
    fontWeight: '700',
    color: '#EF6C00',
  },
  addButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#2E7D32',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 22,
  },
});
