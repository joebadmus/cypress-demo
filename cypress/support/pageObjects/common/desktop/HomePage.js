import FooterSection from "../../../pageSections/FooterSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";

class HomePage {
  constructor() {
    cy.visit(globalThis.countryUnderTest.url);
    cy.log(`Application on ${globalThis.countryUnderTest.name} Home page`);
  }
  
  headerTopBarSection(){
    return new HeaderTopBarSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default HomePage;
