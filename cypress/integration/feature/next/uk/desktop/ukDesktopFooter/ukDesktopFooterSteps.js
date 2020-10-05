import UkDesktopHomePage from "../../../../../../support/pageObjects/uk/UkDesktopHomePage";
let desktopHomePage = new UkDesktopHomePage();




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
  getMarketFooterLinkUrl: function (linkType) {
    var link = {
      "Frequently Asked Questions": "https://www.next.co.uk/help",
      "Contact Us": "https://www.next.co.uk/help/Faq/32475",
      "Delivery Information": "https://www.next.co.uk/help/SubCategory/32250",
      "Arrange A Return": "https://www.next.co.uk/secure/account/Login",
      "Product Recall": "https://www.next.co.uk/help/Faq/32428",
      "Accessible Site": "https://accessible.next.co.uk/",
      "Website Accessibility Policy": "https://www.next.co.uk/help/Faq/32625",
      "Accessibility In Our Stores":
        "https://www.accessable.co.uk/organisations/next",
      "Site Map": "https://www.next.co.uk/site-map",
      "Next Credit Options": "https://www.next.co.uk/credit",
      "Next Unlimited": "https://www.next.co.uk/unlimited",
      Evouchers: "https://www.next.co.uk/evouchers",
      "Gift Cards": "https://flowers.next.co.uk/gift-cards",
      "Gift Experiences":
        "https://www.next.co.uk/shop/department-homeware-category-giftexperiences-0",
      "Flowers, Plants & Wine": "https://flowers.next.co.uk/",
      "Cookies & Privacy Policy": "https://www.next.co.uk/privacy",
      "Terms & Conditions": "https://www.next.co.uk/terms",
      "Next Mobile": "#",
      "Next App": "https://www.next.co.uk/apps",
      "The Company": "https://www.nextplc.co.uk/",
      "Media & Press": "https://www.nextplc.co.uk/media/media-contacts",
      "Business 2 Business": "http://b2b.next.co.uk/home.aspx",
      "Next Franchise": "https://www.next.co.uk/next-franchise",
      "Careers @ Next": "https://careers.next.co.uk/",
      "View Our Modern Slavery Statement":
        "https://www.nextplc.co.uk/~/media/Files/N/Next-PLC-V2/documents/corporate-responsibility/human-rights-and-modern-slavery-2019.pdf",
      "Corporate Responsibility Report":
        "https://www.nextplc.co.uk/~/media/Files/N/Next-PLC-V2/documents/cr-reports/cr-2019.pdf",
    };

    // for (var i = 0; i < this.link.length; i++) {
    //   if (this.links[i].key === linkType) {
    //     return this.links[i].value;
    //   }
    // }
    for (var key in link) {
      if (link[key] === linkType) {
        console.log(link[key]);
        console.log(linkType);
        return link[key];
      }
    }
    return null;
  },

  getMarketFooterLinkUrlMK: function (linkType) {
    let dictionary = {
      "Size Guide":
        "https://www.nextdirect.com/help/en/mx/Section.aspx?ItemId=13693",
      "Privacy Policy": "https://www.next.mx/en/privacypolicy",
      "Media & Press": "https://www.nextplc.co.uk/media/media-contacts",
      "Returns Information":  "https://www.next.mx/en/faqs#returnskeyinformation",
      "Shipping Information": "https://www.next.mx/en/faqs#deliverykeyinformation",
      "Contact Us": "https://www.next.mx/en/faqs#contactus",
      Sitemap: "https://www.next.mx/en/sitemap",
      "Terms & Conditions": "https://www.next.mx/en/terms",
      "The Company": "https://www.nextplc.co.uk/",
      "Careers@next": "https://careers.next.co.uk/",
      "Next Franchise": "https://www.next.mx/en/franchise",
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

Given("I am an {string} user {string} on {string} site", function (
  userType,
  modeType,
  marketType
) {
  // cy.visit("https://www.next.co.uk/");
  // cy.visit("https://www.next.mx/en");
  desktopHomePage.visistUkHomePage();
});

When("i am viewing the footer of the page", function () {});

let dt;
// Then(
//   "i should see that the Next_UK footer links are grouped as shown",
//   function (dataTable) {
//     dt = dataTable;
//     desktopHomePage.closeCookieConsent();
//     let footer = desktopHomePage.getFooterLinks();
//     dataTable.hashes().forEach(function (element) {
//       footer.should(function ($section) {
//         expect($section.eq(0)).to.contain(element.Help);
//         if (element.Shopping_With_Us !== null)
//           expect($section.eq(0)).to.contain(element.Shopping_With_Us);
//         if (element.Privacy_and_Legal !== null)
//           expect($section.eq(0)).to.contain(element.Privacy_and_Legal);
//         if (element.More_From_Next !== null)
//           expect($section.eq(0)).to.contain(element.More_From_Next);
//       });
//     });
//   }
// );

Then("all the {string} to should lead to correct locations", function (site) {
  

  dt.hashes().forEach(function (element) {
    let expectHelpLink = testDataHelper.getMarketFooterLinkUrlMK(element.Help);
    let expectPrivacyLink = testDataHelper.getMarketFooterLinkUrlMK(element.Privacy_n_Legal );
    let expectServiceLink = testDataHelper.getMarketFooterLinkUrlMK(element.Other_Services);

    desktopHomePage.validateFootLinkFor(element.Help, expectHelpLink);

    if (element.Privacy_n_Legal != "") {
      desktopHomePage.validateFootLinkFor(
        element.Privacy_n_Legal,
        expectPrivacyLink
      );
    }
    if (element.Other_Services != "") {
      desktopHomePage.validateFootLinkFor(
        element.Other_Services,
        expectServiceLink
      );
    }
  });
});

Then("i should see that the Next_MX footer links are grouped as shown",
  function (dataTable) {
    dt = dataTable;
    let footer = desktopHomePage.getFooterLinksMx();
    dataTable.hashes().forEach(function (element) {
      footer.should(function ($section) {
        expect($section.eq(0)).to.contain(element.Help);
        expect($section.eq(0)).to.contain(element.Privacy_n_Legal);
        expect($section.eq(0)).to.contain(element.Other_Services);
      });
    });
  }
);
