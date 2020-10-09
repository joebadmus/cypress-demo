let footer = require("../../fixtures/footers.json");

class TestDataHelper {
  static getFooterFor(marketType, linkText) {
    
    let marketFooters = footer[marketType.substring(0, 2)];
    if (marketFooters === undefined)
      throw `The market ${marketType} does not exist`;

    for (var i = 0; i < marketFooters.length; i++) {
      if (linkText === marketFooters[i].linkText) {
        return marketFooters[i];
      }
    }
    throw `The link '${linkText}' does not exist`;
  }

  //Two digits country code is accepted
  static getAllFooterLinksWithCountryCode(countryCode) {
    let marketFooters = footer[countryCode];
    if (marketFooters === undefined)
      throw `The country code ${countryCode} does not exist`;
    return marketFooters;
  }

  static getCountryCode(country) {
    let dictionary = {
      MEXICO: "MX",
      CANADA: "CA",
      BULGARIA: "BG",
      CROATIA: "HR",
      TURKEY: "TR",
      THAILAND: "TH",
      TAIWAN: "TW",
      USA: "US",
      SWEDEN: "SE",
      SWITZERLAND:"CH",
      ARMENIA:"AM",
      AUSTRALIA:"AU",
      AUSTRIA:"AT",
      AZERBAIJAN:"AZ",
      BAHRAIN:"BH",
      DENMARK:"DK",
      UAE:"AE",
      UKRAINE:"UA",
    };

    var keys = Object.keys(dictionary);

    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === country.toUpperCase()) {
        let countryCode = dictionary[keys[i]] 
        cy.log('Country code ' + countryCode + ' is returned for ' + country);
        globalThis.currentCountryCode = countryCode;
        return countryCode;
      }
    }
    throw `The country code ${countryCode} does not exist`;
  }

  static getInternationalFoorterIndex(footerText){
    if (footerText === "Size Guide") return 0;
    if (footerText === "Returns Information") return 1;
    if (footerText === "Shipping Information") return 2;
    if (footerText === "Contact Us") return 3;
    if (footerText === "Sitemap") return 4;
    if (footerText === "Terms & Conditions") return 5;
    if (footerText === "Privacy Policy") return 6;
    if (footerText === "Media & Press") return 7;
    if (footerText === "The Company") return 8;
    if (footerText === "Careers@next") return 9;
    if (footerText === "Next Franchise") return 10;
    throw `The footer ${footerText} does not exist`;
  }
}

export default TestDataHelper;
