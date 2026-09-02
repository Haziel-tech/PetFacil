// Base de perguntas frequentes simuladas (fase 1). Cada entrada tem
// palavras-chave: se a pergunta do usuário contiver alguma delas,
// respondemos com a resposta associada. Não é IA de verdade ainda,
// mas o FLUXO de conversa já fica pronto para, na fase 2, trocarmos
// isso por uma chamada de API de IA de verdade.

export const perguntasFrequentes = [
  {
    palavrasChave: ['ração', 'filhote', 'filhotes'],
    resposta:
      'Para filhotes, recomendamos rações específicas para essa fase, como a "Ração Golden Filhotes". Ela é rica em proteínas para o crescimento.',
  },
  {
    palavrasChave: ['promoção', 'promocao', 'desconto', 'oferta'],
    resposta:
      'Os produtos em promoção aparecem com o selo "promo" na lista. O preço riscado é o valor cheio, e o valor ao lado é o promocional.',
  },
  {
    palavrasChave: ['finalizar', 'pedido', 'comprar', 'finalizo'],
    resposta:
      'Para finalizar seu pedido, adicione os produtos ao carrinho, acesse a tela "Carrinho" e toque em "Finalizar pedido". O pagamento é feito no caixa da loja, na retirada.',
  },
  {
    palavrasChave: ['remover', 'excluir', 'tirar'],
    resposta:
      'Para remover um item do carrinho, abra a tela "Carrinho" e toque no "×" ao lado do produto.',
  },
  {
    palavrasChave: ['cadastro', 'cadastrar', 'conta'],
    resposta:
      'Para criar sua conta, toque em "Criar cadastro" na tela de login e preencha nome completo, e-mail, CPF e senha.',
  },
];

const respostaPadrao =
  'Ainda não sei responder isso, mas você pode navegar pelo catálogo ou pelo carrinho para explorar o app!';

export function obterRespostaAssistente(pergunta) {
  const textoNormalizado = pergunta.toLowerCase();

  const encontrada = perguntasFrequentes.find((item) =>
    item.palavrasChave.some((palavra) => textoNormalizado.includes(palavra))
  );

  return encontrada ? encontrada.resposta : respostaPadrao;
}
