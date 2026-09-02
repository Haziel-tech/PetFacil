import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { obterRespostaAssistente } from './assistantResponses';

export default function AssistantModal({ visible, onClose }) {
  // Cada mensagem: { id, autor: 'usuario' | 'assistente', texto }
  const [mensagens, setMensagens] = useState([
    {
      id: 'inicial',
      autor: 'assistente',
      texto: 'Oi! Sou o assistente do PetFácil. Posso ajudar com dúvidas sobre produtos e pedidos 🐾',
    },
  ]);
  const [texto, setTexto] = useState('');

  function enviarMensagem() {
    if (!texto.trim()) return;

    const perguntaDoUsuario = {
      id: `u-${Date.now()}`,
      autor: 'usuario',
      texto: texto.trim(),
    };

    const respostaDoAssistente = {
      id: `a-${Date.now()}`,
      autor: 'assistente',
      texto: obterRespostaAssistente(texto),
    };

    setMensagens((atual) => [...atual, perguntaDoUsuario, respostaDoAssistente]);
    setTexto('');
  }

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          style={styles.sheet}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Assistente PetFácil</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeText}>Fechar</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={mensagens}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.bubble,
                  item.autor === 'usuario' ? styles.bubbleUsuario : styles.bubbleAssistente,
                ]}
              >
                <Text
                  style={
                    item.autor === 'usuario' ? styles.textoUsuario : styles.textoAssistente
                  }
                >
                  {item.texto}
                </Text>
              </View>
            )}
          />

          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="Digite sua dúvida..."
              value={texto}
              onChangeText={setTexto}
              onSubmitEditing={enviarMensagem}
            />
            <TouchableOpacity style={styles.sendButton} onPress={enviarMensagem}>
              <Text style={styles.sendText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '70%',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#212121',
  },
  closeText: {
    color: '#5C6BC0',
    fontWeight: '600',
  },
  list: {
    paddingBottom: 12,
  },
  bubble: {
    maxWidth: '80%',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
  },
  bubbleAssistente: {
    backgroundColor: '#EDE7F6',
    alignSelf: 'flex-start',
  },
  bubbleUsuario: {
    backgroundColor: '#2E7D32',
    alignSelf: 'flex-end',
  },
  textoAssistente: {
    color: '#311B92',
    fontSize: 14,
  },
  textoUsuario: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CFD8DC',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#5C6BC0',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  sendText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
  },
});
