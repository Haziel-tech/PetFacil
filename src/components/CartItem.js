import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { formatCurrency } from '../utils/formatCurrency';

export default function CartItem({ item, onRemove }) {
  const preco = item.precoPromocional ?? item.precoAtual;

  return (
    <View style={styles.row}>
      <View style={styles.thumb} />
      <View style={styles.info}>
        <Text style={styles.nome} numberOfLines={1}>{item.nome}</Text>
        <Text style={styles.preco}>{formatCurrency(preco)}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
        <Text style={styles.removeText}>×</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
  },
  thumb: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#E8F5E9',
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212121',
  },
  preco: {
    fontSize: 13,
    color: '#2E7D32',
    marginTop: 2,
  },
  removeButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFEBEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeText: {
    color: '#D32F2F',
    fontSize: 18,
    lineHeight: 20,
  },
});
