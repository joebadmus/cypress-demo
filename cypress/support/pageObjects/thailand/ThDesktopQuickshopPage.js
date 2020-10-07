import FooterPage from "../../FooterPage";

class ThDesktopQuickshopPage extends FooterPage{
  
  goto() {
    let url = Cypress.env("thHomePageUrl") + "quickshop";
    cy.visit(url);
  }
  
}

export default ThDesktopQuickshopPage;
