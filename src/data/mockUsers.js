// Usuários simulados. Em memória apenas (fase 1).
// O array é "let" (não "const") porque o cadastro (RF01) precisa
// poder adicionar novos usuários durante o uso do app.

export let mockUsers = [
  {
    cpf: '12345678900',
    nomeCompleto: 'Ana Beatriz Silva',
    login: 'ana.silva',
    senha: '123456',
  },
];

// Função para "cadastrar" um novo usuário no mock.
// Simula o que, na fase 2, seria um INSERT no banco de dados.
export function adicionarUsuario(novoUsuario) {
  mockUsers.push(novoUsuario);
}

// Função para "autenticar" — simula o que, na fase 2,
// seria uma consulta ao servidor com verificação de token.
export function autenticarUsuario(login, senha) {
  return mockUsers.find(
    (u) => u.login === login && u.senha === senha
  );
}
