class NextFranchisePage {
  verifyPageIsDisplayed() {
    cy.location().should((url) => {
      expect(url.toString()).to.contain("franchise");
    });
    cy.get('[data-index="03_2"]').should("be.visible");
  }
}

export default NextFranchisePage;
