class FindAStoreContentSection {

    verifyPageIsDisplayed() {
        cy.location().should((loc) =>{
            expect(loc.toString()).to.contain("store-locator");
        });

        cy.get("th[class='tg-yw4l']").should('be.visible');
    }
}
export default FindAStoreContentSection;
