import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress, variant = 'primary', disabled = false }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'secondary' && styles.secondary,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2E7D32', // verde, cor principal do PetFacil
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  secondary: {
    backgroundColor: '#EF6C00', // laranja, cor secundária
  },
  disabled: {
    backgroundColor: '#BDBDBD',
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});

// Componente genérico de botão. Recebe "variant" para mudar a cor
// sem precisar duplicar o componente inteiro (ex: botão principal
// verde, botão secundário laranja).