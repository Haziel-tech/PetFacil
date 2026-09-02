import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { CartProvider } from './src/context/CartContext';
import { AuthProvider } from './src/context/AuthContext';

// A ordem dos Providers importa pouco aqui (nenhum depende do outro),
// mas ambos precisam envolver o AppNavigator para que QUALQUER tela,
// em qualquer nível de navegação, consiga usar useCart() e useAuth().
export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <StatusBar style="dark" />
        <AppNavigator />
      </CartProvider>
    </AuthProvider>
  );
}
