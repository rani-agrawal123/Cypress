

class Home{
login(){
  cy.visit("https://www.saucedemo.com/");
  cy.get('input[data-test="username"]').type("standard_user");
  cy.get('input[data-test="password"]').type('secret_sauce');
  cy.get('#login-button').click();
}
}
export default Home