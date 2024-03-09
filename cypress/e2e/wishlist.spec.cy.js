/// <reference types="cypress"/>

describe('Wishlist', () => {
    beforeEach('Acessar aplicação', () => {
      cy.visit('/')
  
    })

    it('Validar os produtos da Wishlist', () =>{
        cy.clicarNaWishlist()
        cy.verificandoItensWishlist()    
      })

    it('Adicinando todos produtos da wishlist no carrinho', ()=> {
        cy.clicarNaWishlist()
        cy.verificandoItensWishlist()  
        cy.adicinandoTodosProdutosNoCart()
    })

}) 