import FooterPage from "../FooterPage";
class ChDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("chHomePageUrl"));
  }
}

export default ChDesktopQuickshopPage;
