
describe('', () => {
    it.skip('',()=>{

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

    // text() is a jquery command, it works only when we handle promise
    //  so to use text(), we need to handle the promise

    // when cypress command is concatinating with another cypress command, promise is handle by default
    // when cypress command is concatinating with jquery commands, promise has to be handled

    cy.log(cy.get('.brand').text()); //with jquery
    cy.log(cy.get('.brand').click()); //with cypress


    cy.get('.brand').then(function(logo){
        cy.log(logo.text());
    })
    cy.get('.brand').then(function($logo){
        cy.log($logo.text());
    })

     })



     
     
     it('', () => {

        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // cy.get('[placeholder="Username"]').type("admin");
        // cy.get('[placeholder="Username"]').then(($input)=>{
        //     $input.val('Admin');
        // })

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[placeholder="Username"]').type('Admin');
         
        cy.get('[placeholder="Username"]').then(($inp) => {
            $inp.css('color', 'red');
        });

    })


    it.skip('',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').click();
        cy.get('#checkBoxOption2').click();
        cy.get('#checkBoxOption3').click();
    })
    
    it.only('',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('[value="radio1"]').click();
        cy.get('[value="radio2"]').click();
        cy.get('[value="radio3"]').click();

    })

})