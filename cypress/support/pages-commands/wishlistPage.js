
const btnWishList = '.mobile-right-side > .header-action-link > :nth-child(2) > .offcanvas-toggle > .fa';
const tituloWishlist = '#offcanvas-wishlish'
const item1 = '.offcanvas-wishlist > :nth-child(1) > .offcanvas-wishlist-item-block > .offcanvas-wishlist-item-content > .offcanvas-wishlist-item-link';
const item2 = '#offcanvas-wishlish > div.offcanvas-wishlist-wrapper > ul.offcanvas-wishlist > li:nth-child(2) > div.offcanvas-wishlist-item-block > div > a';
const item3 = '#offcanvas-wishlish > div.offcanvas-wishlist-wrapper > ul.offcanvas-wishlist > li:nth-child(3) > div.offcanvas-wishlist-item-block > div > a';
const item4 = '#offcanvas-wishlish > div.offcanvas-wishlist-wrapper > ul.offcanvas-wishlist > li:nth-child(4) > div.offcanvas-wishlist-item-block > div > a';
const btnViewlist = '#offcanvas-wishlish > div.offcanvas-wishlist-wrapper > ul.offcanvas-wishlist-action-button > li > a';
const btnAddToCart = ':nth-child(1) > .product_addcart > .theme-btn-one';
const mensagemSucessoToCart = '#swal2-title';

Cypress.Commands.add('clicarNaWishlist', ()=>{
    cy.get(btnWishList).click()
    cy.get(tituloWishlist).should('contain.text', 'Wishlist');
    cy.url().should('include', '#offcanvas-wishlish')
})

Cypress.Commands.add('verificandoItensWishlist', ()=> {
    cy.get(item1).should('contain.text', 'Boho Tops for Girls');
    cy.get(item2).should('contain.text', 'Skater Dress');
    cy.get(item3).should('contain.text', 'Rocking Chair')
    cy.get(item4).should('contain.text', 'Easy Chair')
})

Cypress.Commands.add('adicinandoTodosProdutosNoCart', ()=> {
    cy.get(btnViewlist).click()
    cy.url().should('include', '/wishlist')
    cy.get(btnAddToCart).click()
    cy.get(mensagemSucessoToCart).should('contain.text', 'Success!')
    cy.get(btnAddToCart).click()
    cy.get(mensagemSucessoToCart).should('contain.text', 'Success!')
    cy.get(btnAddToCart).click()
    cy.get(mensagemSucessoToCart).should('contain.text', 'Success!')
    cy.get(btnAddToCart).click()
    cy.get(mensagemSucessoToCart).should('contain.text', 'Success!')
})
