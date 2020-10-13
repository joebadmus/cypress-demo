import FooterSection from "../../../pageSections/FooterSection";
import QuickshopContentSection from "../../../pageSections/QuickshopContentSection";

class QuickshopPage {

    constructor(){
        cy.visit(globalThis.countryUnderTest);
        cy.get('[title="Quickshop"]').click();
        cy.log(`Application on ${globalThis.countryUnderTest.name} Quickshop page`);
    }
    
    QuickshopContentSection(){
        return new QuickshopContentSection();
    }
    
    footerSection(){
        return new FooterSection();
    }
}

  export default QuickshopPage;
  