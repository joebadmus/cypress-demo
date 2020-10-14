import FooterSection from "../../../pageSections/FooterSection";
import PrivacypolicyContentSection from "../../../pageSections/PrivacypolicyContentSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";

class PrivacyPolicyPage {
  constructor() {
    cy.log(
      `Application on ${globalThis.countryUnderTest.name} Privacy Policy Page`
    );
  }

  headerTopBarSection() {
    return new HeaderTopBarSection();
  }

  PrivacypolicyContentSection() {
    return new PrivacypolicyContentSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default PrivacyPolicyPage;
