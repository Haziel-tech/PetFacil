import React, { createContext, useState, useContext } from 'react';
import { autenticarUsuario, adicionarUsuario } from '../data/mockUsers';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [compras, setCompras] = useState([]); // histórico de compras

  function login(loginInput, senhaInput) {
    // autenticação simulada, sem token/back-end.
    const usuario = autenticarUsuario(loginInput, senhaInput);
    if (usuario) {
      setUsuarioLogado(usuario);
      return true;
    }
    return false;
  }

  function logout() {
    setUsuarioLogado(null);
  }

  function cadastrar(novoUsuario) {
    // RF01
    adicionarUsuario(novoUsuario);
  }

  function registrarCompras(itensDoCarrinho) {
    // uma compra é gerada PARA CADA PRODUTO do carrinho.
    // Cada compra tem SOMENTE: nome do produto, preço e data da compra.
    const novasCompras = itensDoCarrinho.map((item) => ({
      nomeProduto: item.nome,
      preco: item.precoPromocional ?? item.precoAtual,
      dataDaCompra: new Date().toISOString(),
    }));
    setCompras((atual) => [...atual, ...novasCompras]);
  }

  const value = {
    usuarioLogado,
    compras,
    login,
    logout,
    cadastrar,
    registrarCompras,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth precisa ser usado dentro de um AuthProvider');
  }
  return context;
}
