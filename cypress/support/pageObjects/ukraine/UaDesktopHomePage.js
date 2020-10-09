import FooterPage from "../FooterPage";
class UaDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("uaHomePageUrl"));
  }
}

export default UaDesktopQuickshopPage;
