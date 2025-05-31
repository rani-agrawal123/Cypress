// import "cypress-iframe"
describe('Windows',()=>{
// it.skip('Multiple Windows testing',()=>{
    
//     cy.visit('https://the-internet.herokuapp.com/windows')
//     cy.wait(2000);
//     cy.get('a[href="/windows/new"]').invoke('removeAttr','target').click();
     
//     cy.url().should('include','windows/new')
//     cy.get('h3').should('have.text','New Window')
// })

it('iframe test',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
     cy.frameLoaded('#courses-iframe');
     cy.wait(3000);
     cy.iframe().find("a[href='mentorship']").eq(0).click();
     cy.wait(3000);
     cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
     cy.wait(3000);

    //  eq- will access the element with the given index
    //  find -- text or the selector
})





    // iframe commands
    it.only('',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.login();
        cy.logout();
    })
}) 