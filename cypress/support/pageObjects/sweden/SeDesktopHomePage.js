import FooterPage from "../../footerPage";
class SeDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("seHomePageUrl"));
  }
}

export default SeDesktopQuickshopPage;
