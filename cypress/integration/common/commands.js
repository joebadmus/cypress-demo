Cypress.Commands.add("validateLinkHref", (linkText, linkUrl)=> {
    //debugger;
    cy.contains("a",linkText, { timeout: 10000 })
    .invoke("attr", "href")
    .should("contain", linkUrl);

});