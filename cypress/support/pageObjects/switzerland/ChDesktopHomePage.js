import FooterPage from "../../footerPage";
class ChDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("chHomePageUrl"));
  }
}

export default ChDesktopQuickshopPage;
