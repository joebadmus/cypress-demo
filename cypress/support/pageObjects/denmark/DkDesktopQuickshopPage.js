import FooterPage from "../FooterPage";

class DkDesktopQuickshopPage extends FooterPage{
  
  goto() {
    let url = Cypress.env("dkHomePageUrl") + "quickshop";
    cy.visit(url);
  }
  
}

export default DkDesktopQuickshopPage;
