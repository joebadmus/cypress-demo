Given("I Open the conduit loging page", function () {
  cy.visit("http://react-redux.realworld.io/#/login");
});

When("I type in username and password", (datatable) => {
  datatable.hashes().forEach((element) => {
    cy.get('[type="email"]').type(element.username);
    cy.get('[type="password"]').type(element.password);
  });
});

When("I click on sign in button", function () {
  cy.get('[class*="btn-primary"]')
    .contains("Sign in")
    .should("be.visible")
    .click();
});

Then("{string} should be shown", function (content) {
  cy.contains(content, { timeout: 10000 }).should("be.visible");
});
