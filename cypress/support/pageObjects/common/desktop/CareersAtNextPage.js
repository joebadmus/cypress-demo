import FooterSection from "../../../pageSections/FooterSection";
import CareersAtNextContentSection from "../../../pageSections/CareersAtNextContentSection";
class CareersAtNextPage {

    constructor() {
        cy.log(`Application on ${globalThis.countryUnderTest.name} Careers@next page`);
    }

    CareersAtNextContentSection() {
        return new CareersAtNextContentSection();
    }

    footerSection() {
        return new FooterSection();
    }

    goto(){
        cy.visit("https://careers.next.co.uk/");
    }
}

export default CareersAtNextPage;
