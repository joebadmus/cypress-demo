class CareersAtNextContentSection {

    verifyPageIsDisplayed() {
        cy.location().should((loc) =>{
            expect(loc.toString()).to.contain("careers");
        });

        cy.get(".town").should('be.visible');
    }
}
export default CareersAtNextContentSection;
