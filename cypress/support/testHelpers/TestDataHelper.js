
let footer = require("../../fixtures/footers.json");

class TestDataHelper {
  static getMarketFooterLinkUrlMK(linkType) {
    let dictionary = {
      "Size Guide":
        "https://www.nextdirect.com/help/en/mx/Section.aspx?ItemId=13693",
      "Privacy Policy": "https://www.next.mx/en/privacypolicy",
      "Media & Press": "https://www.nextplc.co.uk/media/media-contacts",
      "Returns Information":
        "https://www.next.mx/en/faqs#returnskeyinformation",
      "Shipping Information":
        "https://www.next.mx/en/faqs#deliverykeyinformation",
      "Contact Us": "https://www.next.mx/en/faqs#contactus",
      Sitemap: "https://www.next.mx/en/sitemap",
      "Terms & Conditions": "https://www.next.mx/en/terms",
      "The Company": "https://www.nextplc.co.uk/",
      "Careers@next": "https://careers.next.co.uk/",
      "Next Franchise": "https://www.next.mx/en/franchise"
      
    };
    var keys = Object.keys(dictionary);

    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === linkType) {
        return dictionary[keys[i]];
      }
    }
    return "";
  }
  static getFooterFor(marketType, linkText) {
    
    let marketFooters = footer[marketType.substring(0, 2)];
    if (marketFooters === undefined) throw `The market ${marketType} does not exist`;

    for (var i = 0; i < marketFooters.length; i++) {
      if (linkText === marketFooters[i].linkText) {
        return marketFooters[i];
      }
    }
    throw `The link '${linkText}' does not exist`;
  }
}

export default TestDataHelper;
