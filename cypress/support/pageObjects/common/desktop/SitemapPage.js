import FooterSection from "../../../pageSections/FooterSection";
import SitemapContentSection from "../../../pageSections/SitemapContentSection";
class SitemapPage {
  // verifyPageIsDisplayed() {
  //   cy.location().should(url => {
  //       expect(url.toString()).to.contain("sitemap");
  //   })
  //   cy.get('[data-index="03_1"]').should("be.visible");
  // }

  constructor(){
    cy.log(`Application on ${globalThis.countryUnderTest.name} Sitemap Page`)
  }

  sitemapContentSection(){
    return new SitemapContentSection();
  }
  footerSection(){
    return new FooterSection();
}
}
export default SitemapPage;
