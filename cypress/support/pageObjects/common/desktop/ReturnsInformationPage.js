import FooterSection from "../../../pageSections/FooterSection";
import StorefrontContentSection from "../../../pageSections/StorefrontContentSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";

class ReturnsInformationPage {
  constructor() {
    cy.log(
      `Application on ${globalThis.countryUnderTest.name} Returns Information Page`
    );
  }

  headerTopBarSection(){
    return new HeaderTopBarSection();
  }
  
  storefrontContentSection() {
    return new StorefrontContentSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default ReturnsInformationPage;
