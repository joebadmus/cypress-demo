import FooterPage from "../FooterPage";
class TwDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("twHomePageUrl"));
  }
}

export default TwDesktopQuickshopPage;
