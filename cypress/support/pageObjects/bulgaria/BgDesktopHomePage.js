import FooterPage from "../../FooterPage";
class BgDesktopQuickshopPage extends FooterPage {
  goto() {
    cy.visit(Cypress.env("bgHomePageUrl"));
  }

}

export default BgDesktopQuickshopPage;
