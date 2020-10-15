import FooterSection from "../../../pageSections/FooterSection";
import QuickshopContentSection from "../../../pageSections/QuickshopContentSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";

class QuickshopPage {
  constructor() {
    cy.visit(globalThis.countryUnderTest);
    cy.get('[data-testid*="footer-quick-links-link"]').click();
    cy.log(`Application on ${globalThis.countryUnderTest.name} Quickshop page`);
  }

  headerTopBarSection() {
    return new HeaderTopBarSection();
  }

  QuickshopContentSection() {
    return new QuickshopContentSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default QuickshopPage;
