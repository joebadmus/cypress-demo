import FooterPage from "../FooterPage";
class CaDesktopHomePage extends FooterPage {
 
  goto() {
    cy.visit(Cypress.env("caHomePageUrl"));
  }
}

export default CaDesktopHomePage;
