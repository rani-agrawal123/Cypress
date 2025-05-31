
import "cypress-iframe";
describe('to validate the functionality', ()=>{
    it('handle iframe',()=>{
     
     cy.visit('https://github.com/login');

     cy.get('#login_field').type('abcd@gmail.com');
     cy.get('#password').type('123456');
     cy.xpath('//input[@type="submit"]').click()

    });
});