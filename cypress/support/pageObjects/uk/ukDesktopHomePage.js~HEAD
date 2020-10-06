class UkDesktopHomePage {
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
    // return cy.get('[data-testid="footer-main-links-title-help-list"]');
  }
}

export default UkDesktopHomePage;
