import FooterPage from "../FooterPage";

class UsDesktopQuickshopPage extends FooterPage{
  
  goto() {
    let url = Cypress.env("usHomePageUrl") + "quickshop";
    cy.visit(url);
  }
  
}

export default UsDesktopQuickshopPage;
