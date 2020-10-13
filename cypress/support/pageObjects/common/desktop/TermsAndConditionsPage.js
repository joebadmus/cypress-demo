import FooterSection from "../../../pageSections/FooterSection";
import TermsAndConditionsContentSection from "../../../pageSections/TermsAndConditionsContentSection";
class TermsAndConditionsPage {
  constructor() {
    cy.log(
      `Application on ${globalThis.countryUnderTest.name} Terms And Conditions Page`
    );
  }

  termsAndConditionsContentSection() {
    return new TermsAndConditionsContentSection()
  }
  footerSection() {
    return new FooterSection();
  }
}

export default TermsAndConditionsPage;
