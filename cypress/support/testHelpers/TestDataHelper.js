// import filef from "../../fixtures/mxFooters.json"
let file = new Request("../../fixtures/mxFooters.json");

class TestDataHelper {
   
  static getMarketFooterLinkUrlMK(linkType) {
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
  }
}

export default TestDataHelper;
