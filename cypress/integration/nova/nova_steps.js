const { assertThat, is} = require('hamjest')

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import Functions from 'C:/Users/ms83767/Documents/Projects/cypress_setup/cypress/integration/support/functions.js'

const APIF = new Functions()

Given('I have a valid security token', function () {
  APIF.getAPIToken()
});

When('I post to the onBoarding API', function () {
  APIF.postStandardOnboarding()
});

Then('i get a positive response', function () {
  
});



Given('I dont have a valid security token', () => {})
Given('I dont have a valid security token but i want this test to pass', () => {accessToken = accessTokenF})
When ('I post to the onBoarding API without a valid security token', () => {cy.noAccessTokenF()})
Then('I get a negative response', () => {cy.FcheckStatusResponse()})