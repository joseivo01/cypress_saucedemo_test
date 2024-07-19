```markdown
# Technical Test Vox

Este é um projeto de testes automatizados usando [Cypress](https://www.cypress.io/) 
para validar os fluxos de login e compra de itens no site de 
exemplo [Sauce Demo](https://www.saucedemo.com/).

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em seu ambiente:

- [Node.js](https://nodejs.org/en/download/) (recomendado: versão LTS)
- [npm](https://www.npmjs.com/get-npm) (normalmente instalado junto com o Node.js)

## Instalação

Clone este repositório em sua máquina local e instale as dependências:

```
bash
git clone https://github.com/joseivo01/cypress_saucedemo_test.git
cd technical-test-vox
npm install
```

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte maneira:

technical-test-vox/
├── cypress/
│   ├── downloads/
│   ├── e2e/
│   │   ├── integration/
│   │   │   ├── checkout.spec.cy.js
│   │   │   ├── home.spec.cy.js
│   │   │   ├── item.spec.cy.js
│   │   │   ├── login.spec.cy.js
│   │   ├── regression/
│   │   │   └── buy_itens_flows.spec.cy.js
│   ├── fixtures/
│   │   └── user_of_page.js
│   ├── screenshots/
│   ├── support/
│   │   ├── commands.js
│   │   ├── elements.js
│   │   └── utils.js
├── cypress.config.js
└── package.json


## Configuração

O arquivo `cypress.config.js` contém as configurações do Cypress, incluindo o `baseUrl` e outros parâmetros. Certifique-se de definir as variáveis de ambiente conforme necessário:

```javascript

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    downloadsFolder: 'cypress/downloads',
    defaultCommandTimeout: 15000,
    baseUrl: 'https://www.saucedemo.com/v1',
    supportFile: 'cypress/support/commands.js',
  },
});
```

## Executando os Testes

Para abrir a interface do Cypress, execute:

```
bash
npm run cypress:open
```

Para rodar os testes em modo headless (sem interface gráfica), execute:

```
bash
npm run cypress:run
```

Você também pode rodar os testes em diferentes resoluções de tela:

- Mobile: `npm run cypress:run:mobile`
- Tablet: `npm run cypress:run:tablet`
- Desktop: `npm run cypress:run:desktop`

Para rodar todos os testes em todas as resoluções de tela:

```
bash
npm run cypress:run:all
```

## Comandos Personalizados

Os comandos personalizados estão definidos no arquivo `cypress/support/commands.js`. Aqui estão alguns exemplos de comandos disponíveis:

- `cy.login_page()` - Visita a página de login.
- `cy.login(username, password)` - Faz login com o usuário e senha fornecidos.
- `cy.add_to_cart(item_name)` - Adiciona um item ao carrinho.
- `cy.remove_from_cart(item_name)` - Remove um item do carrinho.

## Estrutura dos Testes

Os testes estão organizados em arquivos diferentes de acordo com a funcionalidade:

- `login.spec.cy.js` - Testes relacionados ao fluxo de login.
  - Deve fazer login com sucesso com usuário padrão
  - Deve tentar fazer login com usuário bloqueado
  - Deve fazer login com sucesso com usuário problem_user
  - Deve fazer login com sucesso com usuário performance_glitch_user
  - Deve falhar ao fazer login com credenciais em branco no campo de usuário
  - Deve falhar ao fazer login com credenciais em branco no campo de senha
  - Deve falhar ao fazer login com credenciais "Spacekey" em branco no campo de usuário
  - Deve falhar ao fazer login com credenciais "SpaceKey" em branco no campo de senha
  
- `checkout.spec.cy.js` - Testes relacionados ao fluxo de checkout.
  - Deve remover item do carrinho e refletir alterações ao voltar
  - Deve redirecionar para página "Sua Informação" ao clicar em "Checkout"
  - Deve retornar para "Seu Carrinho" ao cancelar na página "Sua Informação"
  - Deve redirecionar para página do item ao clicar no item durante checkout
  - Deve retornar para "Seu Carrinho" ao clicar em "Voltar" na página do item durante checkout
  - Deve retornar para página inicial ao cancelar durante visão geral do checkout
  - Deve não avançar com campo "Nome" em branco
  - Deve não avançar com campo "Sobrenome" em branco
  - Deve não avançar com campo "CEP/Código Postal" em branco
  - Deve concluir uma compra de item

- `home.spec.cy.js` - Testes relacionados à página inicial.
  - Deve listar todos os seis itens corretamente
  - Deve ordenar itens alfabeticamente de A a Z
  - Deve ordenar itens alfabeticamente de Z a A
  - Deve ordenar itens por preço em ordem ascendente
  - Deve ordenar itens por preço em ordem descendente
  - Deve adicionar item ao carrinho quando "ADICIONAR AO CARRINHO" for clicado
  - Deve remover item do carrinho quando "REMOVER" for clicado
  - Deve redirecionar para página do item quando um item for clicado
  - Deve restabelecer todos os itens do carrinho antes de clicar em "Restaurar estado"

- `item.spec.cy.js` - Testes relacionados à página de detalhes do item.
  - Deve clicar em item e redirecionar para página interna do item
  - Deve ter o mesmo nome do item na página interna do item
  - Deve exibir botão "REMOVER" após adicionar item ao carrinho a partir da página do item
  - Deve navegar de volta para página inicial quando botão "Voltar" for clicado na página do item
  - Deve marcar item como adicionado ao carrinho quando adicionado a partir da página do item e voltar para página inicial

  - `buy_itens_flows.spec.cy.js` - Testes relacionados ao fluxo de compra de itens.
  - Comprar item acessando página do item
  - Comprar item pela página inicial
  - Comprar item de alto preço pela página inicial
  - Comprar item de baixo preço pela página inicial

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Para mais informações sobre Cypress, visite a [documentação oficial](https://docs.cypress.io/).
```
