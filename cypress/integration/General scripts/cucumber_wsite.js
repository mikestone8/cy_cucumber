/// <reference types="Cypress" />
import {cucPassword} from './variables.js';
import pageObjectModelCucLand from '../POM/pageObjectModelCucLand.js';

const cucio = new pageObjectModelCucLand();

// Test:
describe('Log into cucumber io', () => {
    it('Visits the Cucumber website', () => {
      cy.visit('https://cucumber.io/')
      //cy.pause()
      cy.contains('Login').click()
      cy.url().should('include', '/users/sign_in')

      //cy.cucio.fillEmail('mikestoneham43@gmail.com')
       cy.get('input[id="user_email"]')
         .type('mikestoneham43@gmail.com')
         .should('have.value', 'mikestoneham43@gmail.com')
      cy.get('input[id="user_password"]').type(cucPassword)
      //cy.pause()
      cy.get('input[name="commit"]').click()
      cy.url().should('include', 'studio.cucumber.io/projects')
    })
  })