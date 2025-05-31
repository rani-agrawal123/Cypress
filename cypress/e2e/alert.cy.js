
const url = "https://the-internet.herokuapp.com/javascript_alerts";
describe('alerts',()=>{
    it('handling alerts with cypress',()=>{

        cy.visit(url);
        // alert
        // cy.get(':nth-child(1) > button').click();
        // cy.on('window:alert',(text)=>{
        //   expect(text).to.eq("I am a JS Alert")
        // })//handles the event



        // confirm
        // cy.get(':nth-child(2) > button').click();
        // cy.on('window:confirm',(text)=>{
        //     expect(text).to.eq('I am a JS Confirm');
        //     return true;
        // })
        // cy.get('#result').should('contain','You clicked: Ok');
    //    cy.get('#result').should('have.text','You clicked: Ok');







       
        //  prompt
        // cy.on('window:prompt',()=> "masai school is greet")
        // cy.get(':nth-child(3) > button').click();

        cy.window().then(windows => {
            cy.stub(windows,'prompt').returns('masai school is greet'); //it will  mock
        });
        cy.get(':nth-child(3) > button').click();
    //    include //have.text

})

    it.only('navigation',()=>{

        cy.visit('https://www.opencart.com/')
        cy.contains('Blog').click();
        // cy.go('back')
        cy.go(-1) //-1 == back
        cy.go('forward');
        cy.reload()
    })


})  