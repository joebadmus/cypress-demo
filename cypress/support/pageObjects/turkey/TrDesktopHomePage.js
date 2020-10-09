import FooterPage from "../../pageObjects/FooterPage";
class TrDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("trHomePageUrl"));
  }
}

export default TrDesktopQuickshopPage;
