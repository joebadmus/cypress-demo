import FooterPage from "../../FooterPage";

class AmDesktopQuickshopPage extends FooterPage {
  
  goto() {
    let url = Cypress.env("amHomePageUrl") + "quickshop";
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

export default AmDesktopQuickshopPage;
