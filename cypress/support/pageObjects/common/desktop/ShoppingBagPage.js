import FooterSection from "../../../pageSections/FooterSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";

class ShoppingBagPage {
  constructor() {
    cy.log(
      `Application on ${globalThis.countryUnderTest.name} ShoppingBag Page`
    );
  }

  goto(){
    cy.get('[class*="BagSummary"]>a').click();
  }
 // [class*="BagSummary"]>a
  headerTopBarSection() {
    return new HeaderTopBarSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default ShoppingBagPage;
