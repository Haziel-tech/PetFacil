// Dados simulados de produtos (fase 1 - sem back-end).
// Cada produto segue EXATAMENTE os atributos definidos no documento:
// nome, precoAtual, precoPromocional, tipo, descricao, dataValidade.

export const mockProducts = [
  {
    id: '1',
    nome: 'Ração Golden Filhotes 15kg',
    precoAtual: 189.90,
    precoPromocional: 159.90,
    tipo: 'Ração',
    descricao: 'Ração completa para cães filhotes de todas as raças, rica em proteínas.',
    dataValidade: '2027-03-15',
  },
  {
    id: '2',
    nome: 'Areia Higiênica para Gatos 4kg',
    precoAtual: 39.90,
    precoPromocional: null,
    tipo: 'Higiene',
    descricao: 'Areia com alta absorção e controle de odores para gatos.',
    dataValidade: '2028-01-10',
  },
  {
    id: '3',
    nome: 'Bola Mordedora de Borracha',
    precoAtual: 24.90,
    precoPromocional: 17.90,
    tipo: 'Brinquedo',
    descricao: 'Brinquedo resistente para cães de médio e grande porte.',
    dataValidade: null,
  },
  {
    id: '4',
    nome: 'Shampoo Neutro Pet 500ml',
    precoAtual: 32.50,
    precoPromocional: null,
    tipo: 'Higiene',
    descricao: 'Shampoo suave, indicado para banhos frequentes.',
    dataValidade: '2027-08-20',
  },
  {
    id: '5',
    nome: 'Ração Premium Gatos Adultos 10kg',
    precoAtual: 149.90,
    precoPromocional: 129.90,
    tipo: 'Ração',
    descricao: 'Ração balanceada para gatos adultos, sabor salmão.',
    dataValidade: '2027-05-01',
  },
  {
    id: '6',
    nome: 'Arranhador para Gatos',
    precoAtual: 79.90,
    precoPromocional: null,
    tipo: 'Brinquedo',
    descricao: 'Arranhador em sisal natural com base estável.',
    dataValidade: null,
  },
];
