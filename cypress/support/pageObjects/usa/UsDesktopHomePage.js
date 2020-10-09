import FooterPage from "../FooterPage";
class UsDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("usHomePageUrl"));
  }
}

export default UsDesktopQuickshopPage;
