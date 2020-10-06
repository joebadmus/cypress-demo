import FooterPage from "../../footerPage";
class MxDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("mxHomePageUrl"));
  }
}

export default MxDesktopQuickshopPage;
