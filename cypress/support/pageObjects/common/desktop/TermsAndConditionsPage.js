class TermsAndConditionsPage {

    verifyPageIsDisplayed()  {

        cy.location().should((loc) => {
            expect(loc.toString()).to.contain("terms")
        })


        
    }
}

  export default TermsAndConditionsPage;
  