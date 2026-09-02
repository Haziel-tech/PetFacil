import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import AssistantButton from '../assistant/AssistantButton';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const { login } = useAuth();
  const [loginInput, setLoginInput] = useState('');
  const [senha, setSenha] = useState('');

  function handleEntrar() {
    const sucesso = login(loginInput.trim(), senha);
    if (sucesso) {
      // "reset" em vez de "navigate" para o usuário não conseguir
      // voltar ao Login apertando o botão "voltar" do celular.
      navigation.reset({ index: 0, routes: [{ name: 'Produtos' }] });
    } else {
      Alert.alert('Erro', 'Login ou senha inválidos.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoCircle}>
        <Text style={styles.logoEmoji}>🐾</Text>
      </View>
      <Text style={styles.title}>PetFácil</Text>

      <Input
        label="Login"
        value={loginInput}
        onChangeText={setLoginInput}
        autoCapitalize="none"
      />
      <Input
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Button title="Entrar" onPress={handleEntrar} />

      <Text style={styles.linkPrompt}>Não tem conta?</Text>
      <Button
        title="Criar cadastro"
        variant="secondary"
        onPress={() => navigation.navigate('Cadastro')}
      />

      <AssistantButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F8E9',
    padding: 24,
    justifyContent: 'center',
  },
  logoCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#2E7D32',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  logoEmoji: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1B5E20',
    textAlign: 'center',
    marginBottom: 28,
  },
  linkPrompt: {
    textAlign: 'center',
    color: '#616161',
    marginTop: 18,
    marginBottom: 8,
  },
});
