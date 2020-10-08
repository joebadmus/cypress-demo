import FooterPage from "../../footerPage";
class UsDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("usHomePageUrl"));
  }
}

export default UsDesktopQuickshopPage;
