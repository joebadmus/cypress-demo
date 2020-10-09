import FooterPage from "../FooterPage";

class BgDesktopQuickshopPage extends FooterPage{
  
  goto() {
    let url = Cypress.env("bgHomePageUrl") + "quickshop";
    cy.visit(url);
  }
  
}

export default BgDesktopQuickshopPage;
