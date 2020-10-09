import FooterPage from "../FooterPage";

class CaDesktopQuickshopPage extends FooterPage{
  
  goto() {
    let url = Cypress.env("caHomePageUrl") + "quickshop";
    cy.visit(url);
  }
  
}

export default CaDesktopQuickshopPage;
