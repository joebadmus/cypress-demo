import FooterSection from "../../../pageSections/FooterSection";
import StorefrontContentSection from "../../../pageSections/StorefrontContentSection";

class ContactUsPage {
 
  constructor() {
    cy.log(`Application on ${globalThis.countryUnderTest.name} Contact Us Page`);
  }
  StorefrontContentSection(){
    return new StorefrontContentSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default ContactUsPage;
