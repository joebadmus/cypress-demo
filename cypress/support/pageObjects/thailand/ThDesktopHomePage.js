import FooterPage from "../FooterPage";

class ThDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("thHomePageUrl"));
  }
}

export default ThDesktopQuickshopPage;
