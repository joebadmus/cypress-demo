import FooterPage from "../FooterPage";
class HrDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("hrHomePageUrl"));
  }
}

export default HrDesktopQuickshopPage;
