import FooterPage from "../FooterPage";
class DkDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("dkHomePageUrl"));
  }
}

export default DkDesktopQuickshopPage;
