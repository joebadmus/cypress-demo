import PageHelper from "../../../../../../support/testHelpers/PageHelper";
//import AtDesktopQuickshopPage from "../../../../../../support/pageObjects/austria/AtDesktopQuickshopPage"


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


  getMarketFooterLinkUrlAT: function (linkType) {
    let dictionary = {
      "Size Guide":
        "https://www.nextdirect.com/help/en/at/Section.aspx?ItemId=30781",
      "Privacy Policy": "https://www.next.at/en/privacypolicy",
      "Media & Press": "https://www.nextplc.co.uk/media/media-contacts",
      "Returns Information":  "https://www.next.at/en/faqs#returnskeyinformation",
      "Shipping Information": "https://www.next.at/en/faqs#deliverykeyinformation",
      "Contact Us": "https://www.next.at/en/faqs#contactus",
      Sitemap: "https://www.next.at/en/sitemap",
      "Terms & Conditions": "https://www.next.at/en/terms",
      "The Company": "https://www.nextplc.co.uk/",
      "Careers@next": "https://careers.next.co.uk/",
      "Next Franchise": "https://www.next.at/en/franchise",
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
  page.goto();
//   this.page.validateFootLinkFor()
//   this.page.validateFootLinkFor()
});

When("I am viewing the footer of the page", function () {
  // Scroll to the footer
});


Then("all the Next Austria footer links should lead to correct locations", function (site) {
    
    dt.hashes().forEach(function (element) {
    let expectHelpLink = testDataHelper.getMarketFooterLinkUrlAT(element.Help);
    let expectPrivacyLink = testDataHelper.getMarketFooterLinkUrlAT(element.Privacy_n_Legal );
    let expectServiceLink = testDataHelper.getMarketFooterLinkUrlAT(element.Other_Services);

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

Then("I should see that the Next_AT footer links are grouped as shown",
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
