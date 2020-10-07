// import filef from "../../fixtures/mxFooters.json"
let file = new Request("../../fixtures/mxFooters.json");

class TestDataHelper {
   
  static getMarketFooterLinkUrlMK(linkType) {
    let dictionary = {
        "Size Guide": "https://www.nextdirect.com/help/en/mx/Section.aspx?ItemId=13693",
        "Returns Information":  "https://www.next.mx/en/faqs#returnskeyinformation",
        "Shipping Information": "https://www.next.mx/en/faqs#deliverykeyinformation",
        "Contact Us": "https://www.next.mx/en/faqs#contactus",
        "Sitemap": "https://www.next.mx/en/sitemap",
        "Privacy Policy": "https://www.next.mx/en/privacypolicy",
        "Terms & Conditions": "https://www.next.mx/en/terms",
        "Media & Press": "https://www.nextplc.co.uk/media/media-contacts",
        "The Company": "https://www.nextplc.co.uk/",
        "Careers@next": "https://careers.next.co.uk/",
        "Next Franchise": "https://www.next.mx/en/franchise",
    // ======================Bugaria==============================
        "Таблица с размерите": "https://www.nextdirect.com/help/en/bg/Section.aspx?ItemId=15083",
        "Информация за връщане": "https://www.nextdirect.com/bg/bg/faqs#returnskeyinformation",
        "Информация за доставка": "https://www.nextdirect.com/bg/bg/faqs#deliverykeyinformation",
        "Свържете се с нас": "https://www.nextdirect.com/bg/bg/faqs#contactus",
        "Карта на сайта": "https://www.nextdirect.com/bg/bg/sitemap",
        
        "Декларация за поверителност": "https://www.nextdirect.com/bg/bg/privacypolicy",
        "Общи условия": "https://www.nextdirect.com/bg/bg/terms",
        
        "Медии и преса": "https://www.nextplc.co.uk/media/media-contacts",
        "За компанията": "https://www.nextplc.co.uk/",
        "Работа в Next": "https://careers.next.co.uk/",
        "Франчайзинг с Next": "https://www.nextdirect.com/bg/bg/franchise",
    // ======================Bahrain==============================




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
