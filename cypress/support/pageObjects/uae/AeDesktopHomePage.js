import FooterPage from "../../footerPage";
class AeDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("aeHomePageUrl"));
  }
}

export default AeDesktopQuickshopPage;
