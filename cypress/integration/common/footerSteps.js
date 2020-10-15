import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";
import TestDataHelper from "../../support/testHelpers/TestDataHelper";

let isSecondLanguage = false;
let testPageFooters;

Given(
  "I am an {string} user {string} on {string} viewing {string}.",
  (userType, modeType, country, currentPage) => {
    TestDataHelper.setTestCountry(country);
    globalThis.page = PageHelper.createPagewith(currentPage + "Page");
  }
);

<<<<<<< HEAD
When("I am viewing the footer of the page", function(){
  debugger;
=======
When("I am viewing the footer of the page", function () {
>>>>>>> master
  page.footerSection().gotoFooter();
});

When("I select the {string} from the footer", (footerOption) => {
  let footerLinks = TestDataHelper.getPrimaryLanguageFooterLinks(
    globalThis.countryUnderTest.code
  );
  let footerIndex = TestDataHelper.getInternationalFooterIndex(footerOption);

  page.footerSection().closeCookieConsent();
  page.footerSection().selectFootByText(footerLinks[footerIndex].linkText);
});

Then("I should see all footer content are displayed correctly", (dataTable) => {
  page.footerSection().validateQuickLinkQuickPresent();
  page.footerSection().validateMyAccountIsPresent();

  testPageFooters = !isSecondLanguage
    ? TestDataHelper.getPrimaryLanguageFooterLinks(
        globalThis.countryUnderTest.code
      )
    : TestDataHelper.getSecondLanguageFooterLinks(
        globalThis.countryUnderTest.code
      );

  testPageFooters.forEach((footer) => {
    page.footerSection().validateFootLinkFor(footer.linkText, footer.linkHref);
    page.footerSection().validateLinkIsPresent(footer.linkText);
  });
});

Then("I should see that all the footer links are displayed corrected", () => {
  testPageFooters = TestDataHelper.getPrimaryLanguageFooterLinks(
    globalThis.countryUnderTest.code
  );

  testPageFooters.forEach((footer) => {
    page.footerSection().validateFootLinkFor(footer.linkText, footer.linkHref);
    page.footerSection().validateLinkIsPresent(footer.linkText);
  });
});

Then("selecting the links should lead to correct location", () => {
  testPageFooters.forEach((footer) => {
    page.footerSection().clickFooterLink(footer.linkHref);
    page.footerSection().returnToPreviousPage();
  });
});

// Then("I should see that the footer links are grouped as shown", dataTable => {

//   let allParameters = dataTable.hashes();
//   let headers = dataTable.rawTable[0];
//   debugger
//   for (var i = 0;i < allParameters.length; i++) {
//     for(var header in headers){
//       let linkText = allParameters[i][headers[header]];
//       if(linkText !== ""){
//         let expectLink = TestDataHelper.getFooterFor(testMarketType, linkText);
//         page.footerSection().validateFootLinkFor(linkText, expectLink.linkHref);
//         page.footerSection().validateLinkIsPresent(linkText);
//       }
//     }
//   }
// });

And("I should see that the view mobile site link is present", () => {
  page.footerSection().ValidateMobileViewLinkIsPrestn();
});

When("I am viewing the footer of the page for the second language", () => {
  page.headerTopBarSection().changeCountryLanguage();

  page.footerSection().gotoFooter();

  // page.footerSection().closeCookieConsent();
  isSecondLanguage = true;
});
