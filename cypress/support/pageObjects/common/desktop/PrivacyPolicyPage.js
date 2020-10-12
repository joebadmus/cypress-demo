class PrivacyPolicyPage {

    verifyBreadcrumbHasPrivacyPolicyText() {
        if (globalThis.currentCountryCode === "BG")
            cy.get("li[class='Breadcrumb']").should('have.text', 'Декларация за поверителност')
        else if (globalThis.currentCountryCode === "SE")
            cy.get("li[class='Breadcrumb']").should('have.text', 'Sekretesspolicy')
        else
            cy.get("li[class='Breadcrumb']").should('have.text', 'Privacy Policy')
        // cy.contains(".Component.Text).should("be.visible")
    }
}

export default PrivacyPolicyPage;
