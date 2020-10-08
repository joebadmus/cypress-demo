import FooterPage from "../../FooterPage";

class UaDesktopQuickshopPage extends FooterPage{
  
  goto() {
    let url = Cypress.env("uaHomePageUrl") + "quickshop";
    cy.visit(url);
  }
  
}

export default UaDesktopQuickshopPage;
