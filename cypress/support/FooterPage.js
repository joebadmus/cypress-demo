class FooterPage {
  
    gotoFooter() {
        cy.scrollTo('bottom');
      }
  
    closeCookieConsent() {
      cy.get('div[class*="CookieConsentCross"]').click();
    }
  
    getFooterLinks() {
      return cy.get(".footer153").children("div");
    }

    validateLinkIsPresent(linkText){
        cy.contains("a", linkText)
        .should('be.visible');
    }
  
    validateFootLinkFor(linkText, linkUrl) {
      cy.validateLinkHref(linkText, linkUrl);
    }
    ValidateMobileViewLinkIsPrestn(){
        cy.get('[data-testid="footer-copyright-switcher-mobiletoggle"]')
        .should('be.visible');

    }
  }
  
  export default FooterPage;
  