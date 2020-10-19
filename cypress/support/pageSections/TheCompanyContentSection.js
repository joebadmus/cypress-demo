class TheCompanyContentSection {

    verifyPageIsDisplayed() {
        cy.location().should((loc) =>{
            expect(loc.toString()).to.contain("nextplc");
        });

        cy.get("#nav-media-level1").invoke("attr", "class").should('not.contain','selected');
    }

    acceptCookieConsent() {
        cy.get('#cc-saveAll-startBtn').click();
    }
}
export default TheCompanyContentSection;
