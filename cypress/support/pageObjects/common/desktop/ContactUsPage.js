import FooterPage from "../../FooterPage";
class ContactUsPage extends FooterPage {
 
    checkContactUsPageIsDisplayed() {

        cy.get("#divStorefrontContentSection").should('be.visible')


        //get <b> tag and check text 'I have a Complaint' exists
         cy.get('i').should(($i) => {
             const text = $i.text()

             expect(text).to.include("Chat is available 24/7 from anywhere!")
         })
        
      }
      

}

export default ContactUsPage;
