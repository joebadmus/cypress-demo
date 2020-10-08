import FooterPage from "../../FooterPage";

class ChDesktopQuickshopPage extends FooterPage{
  
  goto() {
    let url = Cypress.env("chHomePageUrl") + "quickshop";
    cy.visit(url);
  }
  
}

export default ChDesktopQuickshopPage;
