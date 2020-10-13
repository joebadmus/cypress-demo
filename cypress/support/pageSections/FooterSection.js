class FooterSection {
  gotoFooter() {
    cy.scrollTo("bottom");
  }

  closeCookieConsent() {
    cy.get('div[class*="CookieConsentCross"]').click();
  }

  getFooterLinks() {
    return cy.get(".footer153").children("div");
  }

  validateLinkIsPresent(linkText) {
    cy.get(".footer153").contains("a", linkText).should("be.visible");
  }

  validateSocialNetworksPresent() {
    cy.get('[data-testid="footer-container"]')
      .find('[class*="footer104"]')
      .should("be.visible");
  }

  validateQuickLinkLanguageSelectorPresent() {
    cy.get('[data-testid="footer-quick-links-language-selector"]').should(
      "be.visible"
    );
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

  ValidateMobileViewLinkIsPrestn() {
    cy.get('[data-testid="footer-copyright-switcher-mobiletoggle"]').should(
      "be.visible"
    );
  }

  selectFootByText(linkText) {
    cy.get("div.footer153 a").each(($el) => {
      if ($el.text() === linkText) {
        if ($el.attr('target') === '_self') {
          cy.get(".footer153").contains("a", linkText).should("be.visible").click();
          return
        } else {
          cy.get(".footer153").contains("a", linkText).should("be.visible").invoke('removeAttr', 'target').click()
          return
        }
      }
    })
  }
}

export default FooterSection;
