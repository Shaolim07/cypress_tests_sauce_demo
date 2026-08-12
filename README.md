# Cypress Automation - SauceDemo

Projeto de automação de testes de interface focado em cenários reais de e-commerce, desenvolvido com Cypress e Page Object Model (POM). O objetivo é demonstrar capacidade de criação de testes automatizados para fluxos críticos de usuário, validação de regras de negócio e prevenção de regressões em aplicações web.

## Visão geral

Este projeto simula testes em um e-commerce de demonstração (SauceDemo) cobrindo cenários de:

- login e autenticação
- validação de formulário
- acesso restrito
- catálogo e ordenação de produtos
- gerenciamento do carrinho
- fluxo de compra e checkout
- logout

A automação foi organizada para ser fácil de manter, escalável e alinhada a boas práticas de testes funcionais e QA.

## Stack

- Cypress
- JavaScript
- Page Object Model
- Mocha / Chai (integrado ao Cypress)
- GitHub Actions-ready workflow

## Objetivo da automação

O projeto foi pensado para evidenciar habilidades relevantes para vagas de QA, incluindo:

- escrita de testes automatizados estáveis e legíveis
- validação de cenários críticos do usuário
- uso de seletores robustos e estrutura organizada
- manutenção de testes por camada de página
- foco em regressão e confiabilidade da aplicação

## Estrutura do projeto

```bash
cypress/
  e2e/
    login.cy.js
    carrinho.cy.js
    catalogo.cy.js
    fluxo_compra.cy.js
  pages/
    login/
    inventory/
    header/
    cart/
  support/
    commands.js
    e2e.js
cypress.config.js
package.json
README.md
```

## Casos cobertos

### Login
- login com sucesso
- login com credenciais inválidas
- usuário bloqueado
- username vazio
- password vazio
- login sem preencher campos
- acesso restrito sem autenticação
- logout com sucesso

### Carrinho
- adicionar múltiplos produtos
- badge do carrinho com contador correto
- remover itens do carrinho
- validação de contagem após remoção
- interação com UI do carrinho

### Catálogo
- ordenação por nome (A-Z e Z-A)
- ordenação por preço (menor ao maior e maior ao menor)
- acesso aos detalhes do produto
- retorno à listagem

### Checkout
- fluxo completo de compra
- confirmação de pedido
- cancelamento do checkout
- validação de campos obrigatórios

## Como executar

### Pré-requisitos

- Node.js instalado
- npm instalado

### Instalação

```bash
npm install
```

### Execução em modo headless

```bash
npx cypress run
```

### Execução no navegador

```bash
npx cypress open
```
## Licença

Este projeto foi criado para fins de estudo e demonstração de automação de testes.
