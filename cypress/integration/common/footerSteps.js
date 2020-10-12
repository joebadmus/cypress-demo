import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";
import TestDataHelper from "../../support/testHelpers/TestDataHelper";


let testMarketType;

Given("I am an {string} user {string} on {string} viewing {string}.", (userType, modeType, country, currentPage) => {
  testMarketType = TestDataHelper.getCountryCode(country) +"_" + currentPage;
  globalThis.page = PageHelper.createPagewith(testMarketType);
  page.goto();
});

Given("I am an {string} user {string} on {string} page", (userType, modeType, marketType) => {
  
  testMarketType = marketType
  globalThis.page = PageHelper.createPagewith(testMarketType);
  page.goto();
});

When("I am viewing the footer of the page", function(){
  page.gotoFooter();
});

When("I select the {string} from the footer", (footerOption) =>{
  let footerLinks = TestDataHelper.getAllFooterLinksWithCountryCode(globalThis.currentCountryCode);
  let footerIndex = TestDataHelper.getInternationalFooterIndex(footerOption);
  
  debugger;
  page.closeCookieConsent();
  page.selectFootByText(footerLinks[footerIndex].linkText);
});

Then("I should see all footer content are displayed correctly", dataTable => {

  page.validateQuickLinkQuickPresent();
  page.validateMyAccountIsPresent();
  // page.validateQuickLinkLanguageSelectorPresent();

  testPageFooters = TestDataHelper.getAllFooterLinksWithCountryCode(testMarketType.substring(0, 2));

  testPageFooters.forEach(footer => {
    page.validateFootLinkFor(footer.linkText, footer.linkHref);
    page.validateLinkIsPresent(footer.linkText);
  });
  
});


let testPageFooters;
Then("I should see that all the footer links are displayed corrected", () => {

  testPageFooters = TestDataHelper.getAllFooterLinksWithCountryCode(testMarketType.substring(0, 2));

  testPageFooters.forEach(footer => {
    page.validateFootLinkFor(footer.linkText, footer.linkHref);
    page.validateLinkIsPresent(footer.linkText);
  });
});

Then("selecting the links should lead to correct location", () => {
  testPageFooters.forEach(footer => {
    page.clickFooterLink(footer.linkHref);
    page.returnToPreviousPage();
  });

});

Then("I should see that the footer links are grouped as shown", dataTable => {

  let allParameters = dataTable.hashes();
  let headers = dataTable.rawTable[0];
  debugger
  for (var i = 0;i < allParameters.length; i++) {
    for(var header in headers){
      let linkText = allParameters[i][headers[header]];
      if(linkText !== ""){
        let expectLink = TestDataHelper.getFooterFor(testMarketType, linkText);
        page.validateFootLinkFor(linkText, expectLink.linkHref);
        page.validateLinkIsPresent(linkText);
      } 
    } 
  }
});

And("I should see that the view mobile site link is present", () => {
  page.ValidateMobileViewLinkIsPrestn();
});
