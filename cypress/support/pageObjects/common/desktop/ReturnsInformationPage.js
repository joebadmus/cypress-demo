import FooterSection from "../../../pageSections/FooterSection";
import StorefrontContentSection from "../../../pageSections/StorefrontContentSection";
class ReturnsInformationPage {
  constructor() {
    cy.log(
      `Application on ${globalThis.countryUnderTest.name} Returns Information Page`
    );
  }

  storefrontContentSection() {
    return new StorefrontContentSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default ReturnsInformationPage;
