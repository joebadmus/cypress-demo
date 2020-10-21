import FooterSection from "../../../pageSections/FooterSection";
import FindAStoreContentSection from "../../../pageSections/FindAStoreContentSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";

class FindAStorePage {
 
  constructor() {
    cy.log(`Application on ${globalThis.countryUnderTest.name} Find a Store Page`);
  }

  goto(){
    cy.get('[aria-label="Find a Store"]').first().click();
  }

  headerTopBarSection(){
    return new HeaderTopBarSection();
  }

  findAStoreContentSection(){
    return new FindAStoreContentSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default FindAStorePage;
