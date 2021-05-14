/// <reference types="Cypress" />
describe('TODO API', () => {
it ('returns JSON data', () =>{
    cy.request(' http://jsonplaceholder.typicode.com/')
    //cy.request('https://api.test.retail.sse.co.uk/esbApi/onboardingApi/V1/api/onboarding')
    .its('headers')
    .its('content-type')
    .should('include', 'application/JSON');
    });
});