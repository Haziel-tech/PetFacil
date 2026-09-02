import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import AssistantModal from './AssistantModal';

// Botão flutuante fixo no canto da tela (posição "absolute").
// Ele só controla um estado: "o modal do chat está aberto ou não".
export default function AssistantButton() {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <TouchableOpacity style={styles.fab} onPress={() => setAberto(true)}>
        <Text style={styles.fabText}>IA</Text>
      </TouchableOpacity>
      <AssistantModal visible={aberto} onClose={() => setAberto(false)} />
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#5C6BC0',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  fabText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
});
