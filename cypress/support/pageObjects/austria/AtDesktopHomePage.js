import FooterPage from "../FooterPage";

class AtDesktopHomePage extends FooterPage {

    goto(){
      cy.visit(Cypress.env('atHomePageUrl'));
    }
   
  }
  
  export default AtDesktopHomePage;
  