
describe('web table',()=>{
    it('wen table testing',()=>{
        // table>tbody>thead>tr>td
       cy.visit('https://www.tutorialspoint.com/selenium/practice/webtables.php');
       cy.get('table tbody tr').each(($row)=>{
        cy.wrap($row).should('be.visible')
       })  
       cy.get('table tbody tr td:nth-child(2)').invoke('text').should('contains','Vega')
       
       //    .each to loop through the whole table
       // $row -jquery loactor- we can't chain the function of the cyress
       // cy.wrap it will wrap the j query locator inside my cypress method to chain it
   //  be visible confirm that element is visible
   // invoke will be used to invoke a method on the element
    })




    // mouse
    it.only('mouse target',()=>{

        cy.visit('https://www.automationexercise.com/');
        // cy.contains('Blue Top').trigger('mouseover');
        cy.contains('Blue Top').realHover();

        // events are not nuch effective
        // oe is mouseover is not getting handled properly
        // cypress runer fast execution is skipping to show the hidden element 
    }) 

})