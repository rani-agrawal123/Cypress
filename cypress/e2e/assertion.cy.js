
describe('Assertion demo', () => {
    // it('Implicit  assertion', () => {
    //     cy.visit('https://the-internet.herokuapp.com/login');

        // Implicit assertion (include and  contain are work as same)
        // should
        // cy.url().should('include','herokuapp.com');
        // cy.url().should('eq','https://the-internet.herokuapp.com/login');
        // cy.url().should('contain','heroku')
/*
        cy.url().should('include','herokuapp.com')
        .should('eq','https://the-internet.herokuapp.com/login')
        .should('contain','heroku')*/

        // cy.url().should('include', 'herokuapp.com')
        //     .and('eq', 'https://the-internet.herokuapp.com/login')
        //     .and('contain', 'heroku')
        //     .and('not.contain', 'green')


        // cy.title().should('include', 'Internet')
        //     .and('eq', 'The Internet')
        //     .and('contain', 'The')

    //     // visible and exist are same
        // cy.get('h2').should('be.visible')//logo visible or  not
            // cy.get('h2').should('exist')
        // .and('exist') //logo exist or not

        // cy.xpath('//a').should('have.length','5') //no. of linkks
        // cy.xpath('//a').should('have.length', '2') //no. of linkks

        // cy.get('#username').type('tomsmitha')
        // cy.get('#username').should('have.value', 'tomsmitha')
    // });

    it('explicit  assertion', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click();


        let expName = 'xyz';
        cy.get('.oxd-userdropdown-tab').then((x) => {

            let actualName = x.text();

            // BDD style
            // expect(actualName).to.equal(expName)
            // expect(actualName).to.not.equal(expName)
   
            // TDD Style
            // assert.equal(actualName, expName)
            assert.notEqual(actualName, expName)
        })
    }); 
});