/// <reference types="Cypress" />
describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    //cy.visit('https://example.cypress.io')
    cy.visit('https://cucumber.io/')
    cy.pause()
    //cy.contains('type').click()
    cy.contains('Login')
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})