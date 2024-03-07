# Repositorio de Automação de Testes com Cypress para o bootcamp Qazando

Este repositório contém testes de automação escritos com o framework Cypress para o site [Automation Practice](https://automationpractice.com/), como parte do bootcamp da Qazando.

## Objetivo

O objetivo deste projeto é demonstrar a automação de testes funcionais, também como parte dos meus estudos para aprimorar e conhecer e praticar. Aos poucos irei acrescentando testes abrangem das funcionalidades do site, garantindo sua qualidade e integridade.

## Configuração

Antes de executar os testes, é necessário realizar as seguintes configurações:

1. **Instalação do Cypress:**
   Certifique-se de ter o Cypress instalado globalmente ou localmente em seu projeto. Caso contrário, você pode instalá-lo executando o comando `npm install cypress --save-dev`.

2. **Clone do Repositório:**
   Clone este repositório para o seu ambiente local usando o comando:
   ```
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

3. **Instalação das Dependências:**
   Navegue até o diretório do projeto e execute o comando:
   ```
   npm install
   ```

4. **Configuração do Ambiente:**
   Abra o arquivo `cypress.json` e ajuste as configurações conforme necessário, como a URL base do site.

## Execução dos Testes

Para executar os testes, siga estas etapas:

1. No terminal, navegue até o diretório do projeto.
2. Execute o comando `npm run cypress:open` para abrir a interface do Cypress.
3. Na interface do Cypress, clique no arquivo de teste que deseja executar.

Os resultados dos testes serão exibidos na interface do Cypress, incluindo os detalhes de cada teste executado.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- `cypress/` : Contém os arquivos de configuração e os testes escritos com o Cypress.
  - `fixtures/` : Contém dados de teste estáticos, como arquivos JSON.
  - `integration/` : Contém os arquivos de teste escritos com o Cypress.
  - `plugins/` : Contém arquivos de plugins do Cypress.
  - `support/` : Contém arquivos de suporte, como comandos personalizados e configurações.
- `node_modules/` : Contém as dependências do projeto.
- `package.json` : Arquivo de manifesto do projeto Node.js, incluindo as dependências.
- `cypress.json` : Arquivo de configuração do Cypress.

## Contribuição

Contribuições são bem-vindas! Se você deseja propor melhorias, correções de bugs ou novos recursos, sinta-se à vontade para abrir uma issue ou enviar um pull request.

---

Sinta-se à vontade para personalizar e ajustar este README conforme necessário para o seu projeto específico. Boa sorte com o bootcamp da Qazando e com a automação de testes!
