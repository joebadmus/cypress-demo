export class FooterPage {
    
    navigateToHomePage(countryCode)
    {
        cy.visit('http://nextdirect.com/' + countryCode +'/en')
    }

    checkFooterExists()
    {
        cy.get('[data-testid="footer-container"]').should('be.visible')
    }

}