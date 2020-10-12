class SitemapPage {
  verifyPageIsDisplayed() {
    cy.location().should(url => {
        expect(url.toString()).to.contain("sitemap");
    })
    cy.get('[data-index="03_1"]').should("be.visible");
  }
}
export default SitemapPage;
