import PageHelper from "../../../../../../support/testHelpers/PageHelper";
//import MxDesktopQuickshopPage from "../../../../../../support/pageObjects/mexico/MxDesktopQuickshopPage"


let pageHelper = new PageHelper();
let dt;
var page;

let testDataHelper = {
  getMode: function (modeType) {
    if (modeType === "mobile") {
      //set webdirver to mobile mode
      return modeType;
    }
    return modeType;
  },
  getUser: function (userType) {
    if (userType === "anonymous") {
      return null;
    }
  },
  setMarket: function (marketType) {
    //Set global markey variable
    // point webdriver to the selected market
  },


  getMarketFooterLinkUrlAZ: function (linkType) {
    let dictionary = {
      "Size Guide":
        "https://www.nextdirect.com/help/en/az/Section.aspx?ItemId=28366",
      "Privacy Policy": "https://www.next.com.az/en/privacypolicy",
      "Media & Press": "https://www.nextplc.co.uk/media/media-contacts",
      "Returns Information":  "https://www.next.com.az/en/faqs#returnskeyinformation",
      "Shipping Information": "https://www.next.com.az/en/faqs#deliverykeyinformation",
      "Contact Us": "https://www.next.com.az/en/faqs#contactus",
      Sitemap: "https://www.next.com.az/en/sitemap",
      "Terms & Conditions": "https://www.next.com.az/en/terms",
      "The Company": "https://www.nextplc.co.uk/",
      "Careers@next": "https://careers.next.co.uk/",
      "Next Franchise": "https://www.next.com.az/en/franchise",
    };

    var keys = Object.keys(dictionary);

    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === linkType) {
        return dictionary[keys[i]];
      }
    }
    return "";
  },
};

Given("I am an {string} user {string} on {string} site", function ( userType, modeType, marketType) {
page = pageHelper.createPagewith(marketType);
  //page = new MxDesktopQuickshopPage();
  //cy.log(page);
  page.goto();
//   this.page.validateFootLinkFor()
//   this.page.validateFootLinkFor()
});

When("i am viewing the footer of the page", function () {
  // Scroll to the footer
});


Then("all the Next Azerbaijan footer links should lead to correct locations", function (site) {
    
    dt.hashes().forEach(function (element) {
    let expectHelpLink = testDataHelper.getMarketFooterLinkUrlAZ(element.Help);
    let expectPrivacyLink = testDataHelper.getMarketFooterLinkUrlAZ(element.Privacy_n_Legal );
    let expectServiceLink = testDataHelper.getMarketFooterLinkUrlAZ(element.Other_Services);

    var expectedPage = page;

    page.validateFootLinkFor(element.Help, expectHelpLink);

    if (element.Privacy_n_Legal != "") {
        page.validateFootLinkFor(element.Privacy_n_Legal, expectPrivacyLink );
    }
    if (element.Other_Services != "") {
        page.validateFootLinkFor(element.Other_Services, expectServiceLink);
    }
  });
});

Then(
  "i should see that the Next_AZ footer links are grouped as shown",
  function (dataTable) {
    dt = dataTable;
    let footer = page.getFooterLinks();
    dataTable.hashes().forEach(function (element) {
      footer.should(function ($section) {
        expect($section.eq(0)).to.contain(element.Help);
        expect($section.eq(0)).to.contain(element.Privacy_n_Legal);
        expect($section.eq(0)).to.contain(element.Other_Services);
      });
    });
  }
);
