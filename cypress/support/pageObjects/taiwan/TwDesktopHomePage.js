import FooterPage from "../../footerPage";
class TwDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("twHomePageUrl"));
  }
}

export default TwDesktopQuickshopPage;
