import FooterSection from "../../../pageSections/FooterSection";
import PrivacypolicyContentSection from "../../../pageSections/PrivacypolicyContentSection";
class PrivacyPolicyPage {

    constructor(){
        cy.log(`Application on ${globalThis.countryUnderTest.name} Privacy Policy Page`);
      }

    PrivacypolicyContentSection(){
        return new PrivacypolicyContentSection();
    }
    
    footerSection(){
        return new FooterSection();
    }
}

export default PrivacyPolicyPage;
