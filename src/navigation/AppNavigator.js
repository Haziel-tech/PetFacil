import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import OrderSuccessScreen from '../screens/OrderSuccessScreen';

const Stack = createNativeStackNavigator();

// Isso reflete exatamente o "Fluxo de Navegação" da Figura 2 do PDF:
// Login <-> Cadastro -> Produtos <-> Detalhe -> Carrinho -> Pedido Finalizado
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={RegisterScreen} />
        <Stack.Screen name="Produtos" component={ProductListScreen} />
        <Stack.Screen name="DetalheProduto" component={ProductDetailScreen} />
        <Stack.Screen name="Carrinho" component={CartScreen} />
        <Stack.Screen name="PedidoFinalizado" component={OrderSuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
