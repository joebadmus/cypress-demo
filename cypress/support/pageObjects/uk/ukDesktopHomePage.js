class UkDesktopHomePage {

  visistUkHomePage(){
    cy.visit(Cypress.env('mxHomePageUrl'));
  }

  

  getFooHelptLinks() {
    return cy.get('[type="email"]');
  }

  getFooterLinks() {
    // return cy.get('section[class*="Footer"]');
    // return cy.get(".footer153");
    return cy.get('[data-testid="footer-main-links-title-help-list"]');
  }

  closeCookieConsent() {
    cy.get('div[class*="CookieConsentCross"]').click();
  }

  getFooterLinksMx() {
    return cy.get(".footer153").children("div");
  }

  validateFootLinkFor(linkText, linkUrl){
    cy.validateLinkHref(linkText, linkUrl);
  }
}

export default UkDesktopHomePage;
