
describe('',()=>{
    it('',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.wait(2000)
        cy.get('select').select('Option1').should('have.value','Option1');
        
        // cy.get('select').select('Option2').should('have.value','Option2');
        // cy.get('select').select('Option3').should('have.value','Option3');
    })
})