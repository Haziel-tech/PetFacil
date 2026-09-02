import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';
import {
  validarNomeCompleto,
  validarEmail,
  validarCPF,
  validarSenha,
  senhasConferem,
} from '../utils/validators';

export default function RegisterScreen({ navigation }) {
  const { cadastrar } = useAuth();

  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');
  // "tocados": só mostramos erro num campo depois que o usuário
  // interagiu com ele, senão a tela nasceria cheia de erros vermelhos.
  const [tocados, setTocados] = useState({});

  // useMemo recalcula os erros toda vez que um valor muda —
  // isso É a "validação em tempo real" pedida no PDF.
  const erros = useMemo(() => {
    return {
      nomeCompleto: validarNomeCompleto(nomeCompleto)
        ? null
        : 'Informe ao menos 2 caracteres.',
      email: validarEmail(email) ? null : 'E-mail inválido.',
      cpf: validarCPF(cpf) ? null : 'CPF inválido.',
      login: login.trim().length > 0 ? null : 'Login obrigatório.',
      senha: validarSenha(senha) ? null : 'Senha obrigatória.',
      repetirSenha: senhasConferem(senha, repetirSenha)
        ? null
        : 'As senhas não coincidem.',
    };
  }, [nomeCompleto, email, cpf, login, senha, repetirSenha]);

  const formularioValido = Object.values(erros).every((e) => e === null);

  function marcarTocado(campo) {
    setTocados((atual) => ({ ...atual, [campo]: true }));
  }

  function handleCadastrar() {
    // Ao tentar enviar, marca tudo como "tocado" para revelar
    // qualquer erro que ainda esteja escondido.
    setTocados({
      nomeCompleto: true,
      email: true,
      cpf: true,
      login: true,
      senha: true,
      repetirSenha: true,
    });

    if (!formularioValido) return;

    cadastrar({
      nomeCompleto: nomeCompleto.trim(),
      cpf: cpf.replace(/\D/g, ''),
      login: login.trim(),
      senha,
    });

    Alert.alert('Sucesso', 'Cadastro realizado! Faça login para continuar.', [
      { text: 'OK', onPress: () => navigation.navigate('Login') },
    ]);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Criar conta</Text>

      <Input
        label="Nome completo"
        value={nomeCompleto}
        onChangeText={setNomeCompleto}
        onBlur={() => marcarTocado('nomeCompleto')}
        error={tocados.nomeCompleto ? erros.nomeCompleto : null}
      />
      <Input
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        onBlur={() => marcarTocado('email')}
        error={tocados.email ? erros.email : null}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        label="CPF"
        value={cpf}
        onChangeText={setCpf}
        onBlur={() => marcarTocado('cpf')}
        error={tocados.cpf ? erros.cpf : null}
        keyboardType="numeric"
        maxLength={14}
      />
      <Input
        label="Login"
        value={login}
        onChangeText={setLogin}
        onBlur={() => marcarTocado('login')}
        error={tocados.login ? erros.login : null}
        autoCapitalize="none"
      />
      <Input
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        onBlur={() => marcarTocado('senha')}
        error={tocados.senha ? erros.senha : null}
        secureTextEntry
      />
      <Input
        label="Repetir senha"
        value={repetirSenha}
        onChangeText={setRepetirSenha}
        onBlur={() => marcarTocado('repetirSenha')}
        error={tocados.repetirSenha ? erros.repetirSenha : null}
        secureTextEntry
      />

      <Button
        title="Cadastrar"
        onPress={handleCadastrar}
        disabled={!formularioValido}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF3E0',
    padding: 24,
    paddingTop: 48,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#E65100',
    marginBottom: 24,
  },
});
