import FooterPage from "../../FooterPage";
class ContactUsPage extends FooterPage {
 
    checkContactUsPageIsDisplayed() {

        //assert url contains 'contact us'
        cy.location().should((loc) => {
            expect(loc.toString()).to.contain("contactus")
        })


        //get <b> tag and check text 'I have a Complaint' exists
         cy.get('b').should(($b) => {
             const text = $b.text()

             expect(text).to.include("I have a Complaint")
         })
        

      }
      

}

export default ContactUsPage;
