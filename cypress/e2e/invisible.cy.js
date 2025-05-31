
describe('', () => {
    it('', () => {
        
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#displayed-text').should('be.visible');
    
    cy.get("#hide-textbox").click();

     cy.get('#displayed-text').should('not.be.visible');

     cy.get('#show-textbox').click();
     cy.get('#displayed-text').should('be.visible');
 
     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
     cy.get('.search-keyword').type('ca');
     cy.wait(2000);
     cy.get('.product:visible').should('have.length', 4);

    });
});

