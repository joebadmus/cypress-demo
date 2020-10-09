import FooterPage from "../FooterPage";

class TwDesktopQuickshopPage extends FooterPage{
  
  goto() {
    let url = Cypress.env("twHomePageUrl") + "quickshop";
    cy.visit(url);
  }
  
}

export default TwDesktopQuickshopPage;
