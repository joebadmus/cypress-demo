import FooterPage from "../../pageObjects/FooterPage";
class TwDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("twHomePageUrl"));
  }
}

export default TwDesktopQuickshopPage;
