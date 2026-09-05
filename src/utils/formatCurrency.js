export function formatCurrency(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

// Formata um número para o padrão de moeda brasileiro: 159.9 -> "R$ 159,90"
