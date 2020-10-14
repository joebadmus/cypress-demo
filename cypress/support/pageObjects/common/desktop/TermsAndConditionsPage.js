import FooterSection from "../../../pageSections/FooterSection";
import TermsAndConditionsContentSection from "../../../pageSections/TermsAndConditionsContentSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";

class TermsAndConditionsPage {
  constructor() {
    cy.log(
      `Application on ${globalThis.countryUnderTest.name} Terms And Conditions Page`
    );
  }

  headerTopBarSection(){
    return new HeaderTopBarSection();
  }
  
  termsAndConditionsContentSection() {
    return new TermsAndConditionsContentSection()
  }
  footerSection() {
    return new FooterSection();
  }
}

export default TermsAndConditionsPage;
