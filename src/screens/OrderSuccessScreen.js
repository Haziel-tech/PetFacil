import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default function OrderSuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🐶</Text>
      <Text style={styles.title}>Pedido finalizado!</Text>
      <Text style={styles.subtitle}>
        O pagamento é feito no caixa da loja, no momento da retirada.
      </Text>

      <Button
        title="Voltar aos produtos"
        onPress={() =>
          navigation.reset({ index: 0, routes: [{ name: 'Produtos' }] })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  emoji: {
    fontSize: 56,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#E65100',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#616161',
    textAlign: 'center',
    marginBottom: 28,
  },
});
