import FooterPage from "../FooterPage";

class TrDesktopQuickshopPage extends FooterPage{
  
  goto() {
    let url = Cypress.env("trHomePageUrl") + "quickshop";
    cy.visit(url);
  }
  
}

export default TrDesktopQuickshopPage;
