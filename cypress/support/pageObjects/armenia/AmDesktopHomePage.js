import FooterPage from "../FooterPage";

class AmDesktopQuickshopPage extends FooterPage {

    goto(){
      cy.visit(Cypress.env('amHomePageUrl'));
    }
  }
  
  export default AmDesktopQuickshopPage;
  