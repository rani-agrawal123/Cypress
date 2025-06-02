
describe('orange hrm hooks', () => {
    it('data driven testing', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // cy.fixture is the command which we use in the cypress to pull the data for 
        // data driven testing
        // forEach loop to itrate throwing my data

        cy.fixture("userCred.json").then((data) => {
            data.users.forEach((user) => {
                let result;
                let test = 0;
                cy.login(user);
                cy.url().then((currUrl) => {
                    if (currUrl.includes('dashboard')) {
                        cy.logout();
                        result = "pass"; //storing data
                    }
                    else {
                        cy.get('.oxd-alert').should('contain', 'Invalid credentials');
                        result = "fail"; // storing data
                    }
                    cy.log(`${result}`)
                })
            })

        })
    })
})




// javascript
// Copy code  data driven code
// const users = [
//   { username: 'user1', password: 'pass1' },
//   { username: 'user2', password: 'pass2' },
// ];

// users.forEach((user) => {
//   it(`Logs in with ${user.username}`, () => {
//     cy.get('#username').type(user.username);
//     cy.get('#password').type(user.password);
//     cy.get('#loginButton').click();
//   });
// });
