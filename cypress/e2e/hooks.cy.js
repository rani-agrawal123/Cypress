
// describe('Hooks',()=>{
//     beforeEach(()=>{
//         cy.log('beforEach')
//     });
//     afterEach(()=>{
//         cy.log('aftereach')
//     });
//     it('Test1',()=>{
//         cy.log("test1")
//     });

//     it('test2',()=>{
//         cy.log('test2')
//     })

//     it('test3',()=>{
//         cy.log('test3')
//     })

//     before(()=>{
//         cy.log('before')
//     })
//     after(()=>{
//         cy.log('after')
//     })
// })




describe('', () => {
    const url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    before(() => {
        cy.log('this is start')
    })
    beforeEach('Login', () => {
        cy.visit(url);
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get(".oxd-button").click();
        cy.wait(3000);
    });
    it('test 1-dashboard', () => {
        cy.url().should('include', 'dashboard')
        cy.contains("Performance").click()
        cy.url().should('include', 'performance')
    });
    it('test 2-performance', () => {
        cy.url().should('include', 'dashboard')
        cy.contains("Performance").click()
        cy.url().should('include', 'performance')
        cy.wait(3000)
    });
    it('test 3-recruitment', () => {
        cy.url().should('include', 'dashboard')
        cy.contains("Performance").click()
        cy.url().should('include', 'performance')
        cy.wait(3000)
    });
    afterEach("Logout", () => {
        cy.get('.oxd-userdropdown-tab').click();
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
        cy.wait(3000);
    });
    after(() => {
        cy.log('this is end')
    });
})