# PetFácil — Fase 1

Aplicativo mobile de pet shop desenvolvido em React Native (Expo), como parte da
disciplina Sistemas de Informação. Nesta fase, todos os dados são simulados
(mock), sem conexão com servidor.

## Como executar

1. Instale as dependências:
   ```
   npm install
   ```

2. Inicie o projeto:
   ```
   npx expo start
   ```

3. Instale o app **Expo Go** no seu celular (disponível na Play Store / App
   Store) e escaneie o QR code exibido no terminal.

   Alternativamente, pressione `a` no terminal para abrir em um emulador
   Android, ou `i` para um simulador iOS (necessário Xcode).

## Usuário de teste

Já existe um usuário pré-cadastrado para testar o login sem precisar passar
pelo cadastro:

- **Login:** ana.silva
- **Senha:** 123456

Você também pode criar uma nova conta pela tela de Cadastro.

## Estrutura do projeto

```
src/
├── components/   → componentes de UI reutilizáveis
├── screens/      → telas do aplicativo
├── navigation/    → configuração de rotas (React Navigation)
├── context/      → estado global (carrinho e autenticação)
├── data/         → dados mockados (produtos e usuários)
├── utils/        → funções auxiliares (validações, formatação)
└── assistant/    → assistente virtual (chat com respostas simuladas)
```

## Requisitos funcionais implementados

| Código | Requisito | Onde |
|--------|-----------|------|
| RF01 | Cadastrar usuário | `RegisterScreen.js` |
| RF02 | Efetuar login | `LoginScreen.js` |
| RF03 | Visualizar produtos | `ProductListScreen.js` |
| RF04 | Adicionar ao carrinho | `ProductCard.js`, `ProductDetailScreen.js` |
| RF05 | Visualizar carrinho | `CartScreen.js` |
| RF06 | Remover do carrinho | `CartItem.js`, `CartScreen.js` |
| RF07 | Finalizar pedido | `CartScreen.js` |
| RF08 | Registrar compra | `AuthContext.js` (`registrarCompras`) |
| RF09 | Assistente com IA | pasta `assistant/` |

## Próxima fase

Na Fase 2, os arquivos `data/mockProducts.js` e `data/mockUsers.js` serão
substituídos por chamadas reais a uma API, com banco de dados, autenticação
por token e senhas criptografadas.
