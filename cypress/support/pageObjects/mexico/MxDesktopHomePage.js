class MxDesktopQuickshopPage {
  goto() {
    cy.visit(Cypress.env("mxHomePageUrl"));
  }

  // closeCookieConsent() {
  //   cy.get('div[class*="CookieConsentCross"]').click();
  // }

  getFooterLinks() {
    return cy.get(".footer153").children("div");
  }

  validateFooterLinks() {
    return cy.get(".footer153").children("div");
  }

  validateFootLinkFor(linkText, linkUrl) {
    cy.validateLinkHref(linkText, linkUrl);
  }
}

export default MxDesktopQuickshopPage;
