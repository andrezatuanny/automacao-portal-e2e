
const campoEmail = '#user';
const campoSenha = '#password';
const btnLogin = '#btnLogin';

const mensagemSucesso = '#swal2-title';
const mensagemSucessoEmail = '#swal2-html-container';


Cypress.Commands.add('loginComSucesso', ()=> {
    cy.get(campoEmail).type('deza@meil.com')
    cy.get(campoSenha).type('123.to')
    cy.get(btnLogin).click()

})

Cypress.Commands.add('loginSenhaInvalida', ()=> {
    cy.get(campoEmail).type('maria@mail.com')
    cy.get(campoSenha).type('123')
    cy.get(btnLogin).click()
})

Cypress.Commands.add('loginEmailInvalido', ()=> {
    cy.get(campoEmail).type('test#erro.com')
    cy.get(campoSenha).type('000.123')
    cy.get(btnLogin).click()
})