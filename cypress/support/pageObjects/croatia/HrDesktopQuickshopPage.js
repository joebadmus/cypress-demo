import FooterPage from "../../FooterPage";

class HrDesktopQuickshopPage extends FooterPage{
  
  goto() {
    let url = Cypress.env("hrHomePageUrl") + "quickshop";
    cy.visit(url);
  }
  
}

export default HrDesktopQuickshopPage;
