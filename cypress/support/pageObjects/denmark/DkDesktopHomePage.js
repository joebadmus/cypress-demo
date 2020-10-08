import FooterPage from "../../footerPage";
class DkDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("dkHomePageUrl"));
  }
}

export default DkDesktopQuickshopPage;
