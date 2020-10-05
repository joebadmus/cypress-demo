class MxDesktopQuickshopPage {
  
  goto() {
    let url = Cypress.env("mxHomePageUrl") + "quickshop";
    cy.visit(url);
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

  validateFootLinkFor(linkText, linkUrl) {
    cy.validateLinkHref(linkText, linkUrl);
  }
}

export default MxDesktopQuickshopPage;
