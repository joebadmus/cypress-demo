import FooterPage from "../FooterPage";

class MxDesktopQuickshopPage extends FooterPage{
  
  goto() {
    var mySiteUrl = Cypress.env("mxHomePageUrl") + "quickshop";
    cy.visit(mySiteUrl);
  }
  
}

export default MxDesktopQuickshopPage;
