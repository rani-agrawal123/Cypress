
describe('', () => {
    it('', () => {

        // cy.visit('https://selectorshub.com/xpath-practice-page/');

        // // cy.get('#pizza').type('testing');

        // cy.get('#userName').shadow().find('#app2').shadow().find('#pizza').type('testing');
        // cy.get('#userName',{timeout:5000}).shadow().find('#app2').shadow().find('#pizza').type('testing');




        // conditional
        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // cy.get('#checkBoxOption1').then($el => {

        //      if($el.is(':visible')){
        //         cy.wrap($el).click()
        //      }
        //      else{
        //         cy.log('element is not visible')
        //      }

        // }
        // )





        // parent- child
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get(".products").find('.product').should('have.length',30);



        
//         describe('template spec', () => {
//     it('passes', () => {
//       cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
//       cy.get('.search-keyword').type('ca')
//       cy.wait(3000)
//       cy.get('.product').should('have.length',5)
//       cy.get('.product:visible').should('have.length',4)
//       cy.get('.products').find('.product').should('have.length',4)
//       cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click()
//       cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
//       cy.get(':nth-child(2) > .product-action > button').click()
//     })
//   })
    })
})