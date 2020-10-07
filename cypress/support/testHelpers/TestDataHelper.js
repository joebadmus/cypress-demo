
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
      "Next Franchise": "https://www.next.mx/en/franchise",
      // ======================Bugaria==============================
      "Таблица с размерите":
        "https://www.nextdirect.com/help/en/bg/Section.aspx?ItemId=15083",
      "Информация за връщане":
        "https://www.nextdirect.com/bg/bg/faqs#returnskeyinformation",
      "Информация за доставка":
        "https://www.nextdirect.com/bg/bg/faqs#deliverykeyinformation",
      "Свържете се с нас": "https://www.nextdirect.com/bg/bg/faqs#contactus",
      "Карта на сайта": "https://www.nextdirect.com/bg/bg/sitemap",

      "Декларация за поверителност":
        "https://www.nextdirect.com/bg/bg/privacypolicy",
      "Общи условия": "https://www.nextdirect.com/bg/bg/terms",

      "Медии и преса": "https://www.nextplc.co.uk/media/media-contacts",
      "За компанията": "https://www.nextplc.co.uk/",
      "Работа в Next": "https://careers.next.co.uk/",
      "Франчайзинг с Next": "https://www.nextdirect.com/bg/bg/franchise",
      // ======================Taiwan==============================
      "尺碼指南": "href=https://www.nextdirect.com/help/zh/tw/Section.aspx?ItemId=14485",
      "退貨資訊": "href=https://www.next.tw/zh/faqs#returnskeyinformation",
      "運送資訊": "href=https://www.next.tw/zh/faqs#deliverykeyinformation",
      "聯絡我們": "href=https://www.next.tw/zh/faqs#contactus",
      "網站導覽": "href=https://www.next.tw/zh/sitemap",
      "隱私權政策": "href=https://www.next.tw/zh/privacypolicy",
      "條款及細則": "href=https://www.next.tw/zh/terms",
      "媒體新聞": "href=https://www.nextplc.co.uk/media/media-contacts",
      "公司簡介": "href=https://www.nextplc.co.uk/",
      "Next人才招募": "href=https://careers.next.co.uk/",
      "Next加盟店": "href=https://www.next.tw/zh/franchise"
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
