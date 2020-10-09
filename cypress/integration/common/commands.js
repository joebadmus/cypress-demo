Cypress.Commands.add("validateLinkHref", (linkText, linkUrl)=> {
    cy.contains("a",linkText)
    .invoke("attr", "href")
    .should("contain", linkUrl);

});