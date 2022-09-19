/// <reference types="cypress" />

describe('001- Adicionando produto ao carrinho de compra', () => {
  const produto = 'galaxy a71' 

  it('DADO que estou no site da Amazon', () => {
    cy.visit('https://www.amazon.com.br/')
  })

  it('QUANDO pesquiso por produto', () => {
    cy.get('#twotabsearchtextbox')
    .type(produto)
    .type('{enter}')
  })

  it('E escolho um produto', () => {
    cy.get('[data-asin="B08GD2J8JH"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base').click()
  })

  it('E aperto para adicionar o carrinho', () => {
    cy.get('#add-to-cart-button',{timeout:10000}).click()
    cy.get('#attachSiNoCoverage').click()
  })


  it('E confirmo a opção de adicionar ao carrinho',() => {
    cy.get('.a-button-input', {timeout:10000}).click()
  })

  it('ENTAO produto deve estar no carrinho',() => {
    cy.contains('h1','Carrinho de compras')
  })
})
