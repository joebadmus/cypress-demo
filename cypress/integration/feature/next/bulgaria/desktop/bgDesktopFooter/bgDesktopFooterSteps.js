// import PageHelper from "../../../../../../support/testHelpers/PageHelper";
// import TestDataHelper from "../../../../../../support/testHelpers/TestDataHelper";

// let pageHelper = new PageHelper();
// let dt;
// let page;


// Given("I am an {string} user {string} on {string} page", function ( userType, modeType, marketType) {
//   page = pageHelper.createPagewith(marketType);
//   page.goto();
// });

// When("I am viewing the footer of the page", function () {
//   // Scroll to the footer
// });


// Then("all the Next Mexico footer links should lead to correct locations", function () {
    
//     dt.hashes().forEach(function (element) {
//       debugger;
//     let expectHelpLink = TestDataHelper.getMarketFooterLinkUrlMK(element.Help);
//     let expectPrivacyLink = TestDataHelper.getMarketFooterLinkUrlMK(element.Privacy_n_Legal );
//     let expectServiceLink = TestDataHelper.getMarketFooterLinkUrlMK(element.Other_Services);

//     page.validateFootLinkFor(element.Help, expectHelpLink);

//     if (element.Privacy_n_Legal != "") {
//         page.validateFootLinkFor(element.Privacy_n_Legal, expectPrivacyLink );
//     }
//     if (element.Other_Services != "") {
//         page.validateFootLinkFor(element.Other_Services, expectServiceLink);
//     }
//   });
// });

// Then(
//   "I should see that the Next_MX footer links are grouped as shown",
//   function (dataTable) {
//     dt = dataTable;
//     let footer = page.getFooterLinks();
//     dataTable.hashes().forEach(function (element) {
//       footer.should(function ($section) {
//         expect($section.eq(0)).to.contain(element.Help);
//         expect($section.eq(0)).to.contain(element.Privacy_n_Legal);
//         expect($section.eq(0)).to.contain(element.Other_Services);
//       });
//     });
//   }
// );
