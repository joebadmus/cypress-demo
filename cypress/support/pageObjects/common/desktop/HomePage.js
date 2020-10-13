import FooterSection from "../../../pageSections/FooterSection";

class HomePage {
  constructor() {
    cy.visit(globalThis.countryUnderTest.url);
    cy.log(`Application on ${globalThis.countryUnderTest.name} Home page`);
  }

  footerSection() {
    return new FooterSection();
  }
}

export default HomePage;
