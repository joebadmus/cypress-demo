import FooterPage from "../../FooterPage";

class AeDesktopQuickshopPage extends FooterPage{
  
  goto() {
    let url = Cypress.env("aeHomePageUrl") + "quickshop";
    cy.visit(url);
  }
  
}

export default AeDesktopQuickshopPage;
