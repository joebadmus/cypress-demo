import FooterSection from "../../../pageSections/FooterSection";
import SitemapContentSection from "../../../pageSections/SitemapContentSection";
class SitemapPage {

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
