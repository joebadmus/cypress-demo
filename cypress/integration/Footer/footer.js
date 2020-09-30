import {FooterPage} from "../../page-objects/footerPage"

const footerPage = new FooterPage()


When("I Open the Intl Homepage for {string}", function (content) {
    footerPage.navigateToHomePage(content)

  });

Then("{string} Homepage should be shown", function (content) {
    
    cy.url().should('include', '/' + content + '/')

    
   
  });

  Then("I check the footer is displayed", function(){
      footerPage.checkFooterExists()
  })