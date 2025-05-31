
describe('Locators', () => {
    it('CSS Selectors', () => {
        cy.visit("https://the-internet.herokuapp.com/login");
        cy.get("[type='text']").type("tomsmith");//tagname#id

        cy.get("input#password").type("SuperSecretPassword!");
        cy.get("button.radius").click({force : true});//.classvalue
    });
});