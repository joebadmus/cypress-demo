import {FooterPage} from "../../page-objects/footerPage"

const footerPage = new FooterPage()


When("I Open the Intl Homepage for {string}", function (content) {
    footerPage.navigateToHomePage('fr')

  });

Then("{string} Homepage should be shown", function (content) {

    if(content === "France" || content === "france") {
        cy.url().should('include', '/fr/')
    }
    else {
        return false
    }
   
  });

  Then("I check the footer is displayed", function(){
      footerPage.checkFooterExists()
  })