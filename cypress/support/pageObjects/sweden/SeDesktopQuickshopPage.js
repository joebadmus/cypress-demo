import FooterPage from "../../FooterPage";

class SeDesktopQuickshopPage extends FooterPage{
  
  goto() {
    let url = Cypress.env("seHomePageUrl") + "quickshop";
    cy.visit(url);
  }
  
}

export default SeDesktopQuickshopPage;
