/// <reference types="cypress"/>

describe('Login', () => {
  beforeEach('Acessar aplicação', () => {
    cy.visit('/login')

  })

  it('Realizar login com sucesso', () =>{
    cy.loginComSucesso()
    cy.get('#swal2-title').should('contain.text', 'Login realizado')
    cy.get('#swal2-html-container').should('contain.text', 'Olá, deza@meil.com')
    cy.url().should('include', '/my-account')

  })

  it('Validar login com senha inválida', () =>{
    cy.loginSenhaInvalida()
    cy.get('.invalid_input').should('contain.text', 'Senha inválida.')
  })

  it('Validar login com e-mail inválido', () =>{
    cy.loginEmailInvalido()
    cy.get('.invalid_input').should('contain.text', 'E-mail inválido.')
  })

})