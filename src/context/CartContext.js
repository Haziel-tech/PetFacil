import React, { createContext, useState, useContext } from 'react';

//    Cria o "canal" de contexto. Ele começa vazio; quem dá vida a ele
//    é o <CartProvider> lá embaixo.
const CartContext = createContext(null);

//     O Provider é um componente que "embrulha" o app inteiro (ou parte
//    dele) e disponibiliza o estado do carrinho para qualquer tela
//    dentro dele, sem precisar passar props manualmente tela por tela
//    (isso se chama "prop drilling" e o Context existe pra evitar).
export function CartProvider({ children }) {
  const [itens, setItens] = useState([]); // cada item = um produto no carrinho

  function adicionarAoCarrinho(produto) {
    // a cada seleção, o carrinho é incrementado com o novo item.
    // Aqui cada "toque" gera uma nova entrada na lista (mesmo que o
    // produto já esteja lá), como o documento descreve.
    setItens((atual) => [
      ...atual,
      { ...produto, itemId: `${produto.id}-${Date.now()}` },
    ]);
  }

  function removerDoCarrinho(itemId) {
    // remover um item específico.
    setItens((atual) => atual.filter((item) => item.itemId !== itemId));
  }

  function limparCarrinho() {
    setItens([]);
  }

  function calcularTotal() {
    return itens.reduce((soma, item) => {
      const preco = item.precoPromocional ?? item.precoAtual;
      return soma + preco;
    }, 0);
  }

  //    "value" é o que fica disponível para qualquer tela que usar
  //    useCart() (definido abaixo).
  const value = {
    itens,
    adicionarAoCarrinho,
    removerDoCarrinho,
    limparCarrinho,
    calcularTotal,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

//     Hook customizado: em vez de toda tela escrever
//    "useContext(CartContext)", ela só chama "useCart()".
//    Mais limpo e fácil de ler.
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart precisa ser usado dentro de um CartProvider');
  }
  return context;
}
