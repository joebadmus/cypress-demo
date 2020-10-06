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


  getMarketFooterLinkUrlBH: function (linkType) {
    let dictionary = {
    "Size Guide": "https://www.nextdirect.com/help/en/bh/Section.aspx?ItemId=31534",
    "Privacy Policy": "https://www.nextdirect.com/bh/en/privacypolicy",
    "Media & Press": "https://www.nextplc.co.uk/media/media-contacts",
    "Returns Information":  "https://www.nextdirect.com/bh/en/faqs#returnskeyinformation",
    "Shipping Information": "https://www.nextdirect.com/bh/en/faqs#deliverykeyinformation",
    "Contact Us": "https://www.nextdirect.com/bh/en/faqs#contactus",
    Sitemap: "https://www.nextdirect.com/bh/en/sitemap",
    "Terms & Conditions": "https://www.nextdirect.com/bh/en/terms",
    "The Company": "https://www.nextplc.co.uk/",
    "Careers@next": "https://careers.next.co.uk/",
    "Next Franchise": "https://www.nextdirect.com/bh/en/franchise",
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

When("I am viewing the footer of the page", function () {
  // Scroll to the footer
});


Then("all the Next Bahrain footer links should lead to correct locations", function (site) {
    
    dt.hashes().forEach(function (element) {
    let expectHelpLink = testDataHelper.getMarketFooterLinkUrlBH(element.Help);
    let expectPrivacyLink = testDataHelper.getMarketFooterLinkUrlBH(element.Privacy_n_Legal );
    let expectServiceLink = testDataHelper.getMarketFooterLinkUrlBH(element.Other_Services);

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
  "I should see that the Next_BH footer links are grouped as shown",
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
