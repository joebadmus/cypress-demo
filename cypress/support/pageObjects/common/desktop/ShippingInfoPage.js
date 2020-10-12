class ShippingInfoPage {

    verifyPageIsDisplayed() {
        cy.get("#divStorefrontContentSection").should("be.visible")
    }
}

  export default ShippingInfoPage;
  