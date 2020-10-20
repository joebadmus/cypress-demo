class FooterSection {
  gotoFooter() {
    cy.scrollTo("bottom");
  }

  closeCookieConsent() {
    cy.get('div[class*="CookieConsentCross"]').click();
  }

  validateLinkIsPresent(linkText) {
    cy.get(".footer153").contains("a", linkText).should("be.visible");
  }

  validateSocialNetworksPresent() {
    cy.get('[data-testid="footer-container"]')
      .find('[class*="footer104"]')
      .should("be.visible");
  }

  validateQuickLinkQuickPresent() {
    cy.get('[data-testid*="footer-quick-links-link"]').should("be.visible");
  }

  validateMyAccountIsPresent() {
    cy.get('[data-testid*="footer-quick-links-myaccount"]').should(
      "be.visible"
    );
  }

  validateFootLinkFor(linkText, linkUrl) {
    cy.validateLinkHref(linkText, linkUrl);
  }

  validateMobileViewLinkIsPresent() {
    cy.get('[data-testid="footer-copyright-switcher-mobiletoggle"]').should(
      "be.visible"
    );
  }

  validateFootLinkSectionIsDisplayed(){
    cy.get('[class="footer153"]').should('be.visible');
  }

  selectFootByText(linkText) {
    cy.get(".footer153").contains("a", linkText).should("be.visible").click();
  }

  validateDesktopViewLinkIsPresent() {
    cy.get('[data-testid="footer-copyright-switcher-desktoptoggle"]').should(
      "be.visible"
    );
  }

  clickMobileViewLink() {
    cy.get('[data-testid="footer-copyright-switcher-mobiletoggle"]').click();
  }

  clickDesktopViewLink() {
    cy.get('[data-testid="footer-copyright-switcher-desktoptoggle"]').click();
  }
}

export default FooterSection;
