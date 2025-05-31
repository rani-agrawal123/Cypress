
describe('Xpath working', () => {
    it('xpath', () => {
        
    cy.visit("https://www.simpleformapp.com/register")
    
    cy.xpath("//input[@id='name']").type("Avinash"); //general approach
//    alternate, xpath by indexing -> (//input[@type='text'])[1]
//    alternatiive, using and operator -> //input[@type='text' and @autocomplete='name']

     cy.xpath("//input[@id='email']").type("avinashavinash@gmail.com");

     cy.xpath("//input[@id='password']").type("1234456");

     cy.xpath("//input[@id='confirmPassword']").type("1234456");

     cy.xpath("//button[@type='submit']").click();


    });
});