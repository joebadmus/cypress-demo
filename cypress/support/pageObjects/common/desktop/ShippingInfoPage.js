class ShippingInfoPage {

    ValidateFAQsTextIsPresent() {
        cy.get("#divStorefrontContentSection").should("be.visible")
    }
}

  export default ShippingInfoPage;
  