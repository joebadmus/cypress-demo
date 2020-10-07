import FooterPage from "../../FooterPage";

class MxDesktopQuickshopPage extends FooterPage{
  
  goto() {
    let url = Cypress.env("mxHomePageUrl") + "quickshop";
    cy.visit(url);
  }
  
}

export default MxDesktopQuickshopPage;
