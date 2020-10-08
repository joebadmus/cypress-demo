import FooterPage from "../../footerPage";
class ThDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("thHomePageUrl"));
  }
}

export default ThDesktopQuickshopPage;
