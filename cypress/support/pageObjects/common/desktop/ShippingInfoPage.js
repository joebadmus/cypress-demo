class ShippingInfoPage {

    ValidateFAQsTextIsPresent() {
        cy.get("#header-logo").should("be.visible")
    }
}

  export default ShippingInfoPage;
  