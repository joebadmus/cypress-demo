import FooterPage from "../../FooterPage";
class ContactUsPage extends FooterPage {
 
    checkContactUsPageIsDisplayed() {

        cy.get("#divStorefrontContentSection").should('be.visible')     
      }
      

}

export default ContactUsPage;
