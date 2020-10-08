import FooterPage from "../../footerPage";
class UaDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("uaHomePageUrl"));
  }
}

export default UaDesktopQuickshopPage;
