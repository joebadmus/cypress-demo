import FooterPage from "../../FooterPage";

class AmDesktopQuickshopPage extends FooterPage {

    goto(){
      cy.visit(Cypress.env('amHomePageUrl'));
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
  
  export default AmDesktopQuickshopPage;
  