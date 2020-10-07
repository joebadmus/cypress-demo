import FooterPage from "../../FooterPage";

class AuDesktopHomePage extends FooterPage {

    goto(){
      cy.visit(Cypress.env('auHomePageUrl'));
    }
    getFooHelptLinks() {
      return cy.get('[type="email"]');
    }
  
    closeCookieConsent() {
      cy.get('div[class*="CookieConsentCross"]').click();
    }
  
    getFooterLinks() {
      return cy.get(".footer153").children("div");
    }
  
    validateFootLinkFor(linkText, linkUrl){
      cy.validateLinkHref(linkText, linkUrl);
    }
  }
  
  export default AuDesktopHomePage;
  