class PrivacyPolicyPage {

    verifyPageIsDisplayed() {
        cy.get(".StorefrontContent").should("be.visible")
    }
}

  export default PrivacyPolicyPage;
  