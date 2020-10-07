import FooterPage from "../../footerPage";
class HrDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("hrHomePageUrl"));
  }
}

export default HrDesktopQuickshopPage;
