import FooterPage from "../../footerPage";
class TrDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("trHomePageUrl"));
  }
}

export default TrDesktopQuickshopPage;
