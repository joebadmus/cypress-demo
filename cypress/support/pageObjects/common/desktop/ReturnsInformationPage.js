class ReturnsInformationPage {
  checkPageIsDisplayed() {
    cy.get('[data-testid="footer-container"]').should("be.visible");
  }
}

export default ReturnsInformationPage;
