import FooterPage from "../../footerPage";
class CaDesktopHomePage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("caHomePageUrl"));
  }
}

export default CaDesktopHomePage;
