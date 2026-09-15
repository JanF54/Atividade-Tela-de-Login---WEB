# Tela de Login - Angular

Projeto desenvolvido para criar uma tela de login como componente Angular.

## Funcionalidades

- Campo de e-mail;
- Campo de senha;
- Botão Entrar;
- Transferência dos dados do formulário para o TypeScript;
- Impressão do e-mail e senha no Console do navegador;
- Opção "Esqueci a senha";
- Opção "Criar conta";
- Componente `Acesso` separado do componente principal.

## Como executar

```bash
npm install
ng serve
```

Depois, acesse:

http://localhost:4200

## Como verificar o console

1. Preencha e-mail e senha.
2. Clique em **ENTRAR**.
3. Abra o DevTools do navegador com `F12`.
4. Acesse a aba **Console**.

Será exibido algo semelhante a:

```text
Dados enviados pelo usuário:
E-mail: exemplo@email.com
Senha: 123456
```

## Criar o projeto do zero

Caso precise montar a atividade em um projeto novo:

```bash
ng new tela-login
cd tela-login
ng generate component acesso
ng serve
```

Substitua os arquivos do componente pelos arquivos deste projeto.
