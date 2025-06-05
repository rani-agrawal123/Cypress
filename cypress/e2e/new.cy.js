
describe("Dummy", () => {
  it("Dump", () => {
    cy.visit("https://www.ulta.com/u/signup?...");
    
    cy.contains("a", "CREATE ACCOUNT").click();
    
    cy.get("input#firstName").type("John");
    cy.get("input#lastName").type("Doe");
    cy.get("#phoneNumber").type("1234567890");
    cy.get("input#email").type("john123@gmail.com");
    cy.get("#password").type("John1234@");
    cy.get("select").select("NY - New York");
    cy.get("#dateOfBirth").type("02/25");
    cy.get("#ulp-stay-signed-in").check();
    
    cy.wait(5000);
    
    cy.get('button[type="submit"][name="action"]')
      .last()
      .should("contain", "CONTINUE")
      .click();
  });
});