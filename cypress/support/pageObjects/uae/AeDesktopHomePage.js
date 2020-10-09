import FooterPage from "../FooterPage";
class AeDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("aeHomePageUrl"));
  }
}

export default AeDesktopQuickshopPage;
