var accessToken;
class pageObjectModelCucLand {
    visit() {
      cy.visit('https://cucumber.io/');
    }
  
    getEmailError() {
      return cy.get(`[data-testid=SignInEmailError]`);
    }
  
    getPasswordError() {
      return cy.get(`[data-testid=SignInPasswordError]`);
    }
  
    fillEmail(value) {
      const field = cy.get(`input[id="user_email"]`);
      field.clear();
      field.type(value);
      return this;
    }
  
    fillPassword(value) {
      const field = cy.get(`input[id="user_password"]`);
      field.clear();
      field.type(value);
      return this;
    }
  
    submit() {
      const button = cy.get(`input[name="commit"]`);
      button.click();
    }
  }
  
  export default pageObjectModelCucLand;