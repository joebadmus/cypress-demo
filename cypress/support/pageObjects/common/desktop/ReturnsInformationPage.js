class ReturnsInformationPage {
  checkPageIsDisplayed() {
    cy.get("#divStorefrontContentSection").should("be.visible");
  }
}

export default ReturnsInformationPage;
