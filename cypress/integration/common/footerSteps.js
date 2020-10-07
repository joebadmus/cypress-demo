import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";
import TestDataHelper from "../../support/testHelpers/TestDataHelper";


let pageHelper = new PageHelper();
let page;
let testMarketType;

Given("I am an {string} user {string} on {string} page", (userType, modeType, marketType) => {
  testMarketType = marketType
  page = pageHelper.createPagewith(marketType);
  page.goto();
});


Given("I am an {string} user on the {string} on any international Homepage",(userType, modeType) =>{

});


When("I am viewing the footer of the page", function () {
  page.gotoFooter();
});


Then("I should see that the footer links are grouped as shown", dataTable => {

  let allParameters = dataTable.hashes();
  let headers = dataTable.rawTable[0];
  
  for (var i = 0;i < allParameters.length; i++) {
    for(var header in headers){
      let linkText = allParameters[i][headers[header]];
     
      if(linkText !== ""){
        // let expectLink = TestDataHelper.getMarketFooterLinkUrlMK(linkText);

        let expectLink = TestDataHelper.getFooterFor(testMarketType, linkText);
        page.validateFootLinkFor(linkText, expectLink.linkHref);
        page.validateLinkIsPresent(linkText);
      } 
    } 
  }

  And("I should see that the view mobile site link is present", () => {
    page.ValidateMobileViewLinkIsPrestn();
  });
});