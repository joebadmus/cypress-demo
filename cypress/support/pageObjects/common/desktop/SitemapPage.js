class SitemapPage {

    verifyPageIsDisplayed() {
        cy.get('[data-index="03_1"]')
        .should("be.visible");
    }
}

  export default SitemapPage;
  