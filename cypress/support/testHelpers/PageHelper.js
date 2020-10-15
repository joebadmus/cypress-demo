import ContactUsPage from "../pageObjects/common/desktop/ContactUsPage";
import TermsAndConditionsPage from "../pageObjects/common/desktop/TermsAndConditionsPage";
import ReturnsInformationPage from "../pageObjects/common/desktop/ReturnsInformationPage";
import SitemapPage from "../pageObjects/common/desktop/SitemapPage";
import NextFranchisePage from "../pageObjects/common/desktop/NextFranchisePage";
import PrivacyPolicyPage from "../pageObjects/common/desktop/PrivacyPolicyPage";
import ShippingInfoPage from "../pageObjects/common/desktop/ShippingInfoPage";
import HomePage from "../pageObjects/common/desktop/HomePage";
import QuickshopPage from "../pageObjects/common/desktop/QuickshopPage";
<<<<<<< HEAD
import CareersAtNextPage from "../pageObjects/common/desktop/CareersAtNextPage";
=======
import LoginPage from "../pageObjects/common/desktop/LoginPage";
import FavouritesPage from "../pageObjects/common/desktop/FavouritesPage";
import ShoppingBagPage from "../pageObjects/common/desktop/ShoppingBagPage";
>>>>>>> master


class PageHelper {
 static createPagewith(marketType) {
    switch (marketType) {
      case "ContactUsPage":  return new ContactUsPage();
      case "TermsAndConditionsPage":  return new TermsAndConditionsPage();
      case "ReturnsInformationPage":  return new ReturnsInformationPage();
      case "SitemapPage":  return new SitemapPage();
      case "NextFranchisePage":  return new NextFranchisePage();
      case "PrivacyPolicyPage":  return new PrivacyPolicyPage();
      case "ShippingInformationPage":  return new ShippingInfoPage();
      case "HomePage":  return new HomePage();
      case "QuickshopPage":  return new QuickshopPage();
<<<<<<< HEAD
      case "CareersAtNextPage":  return new CareersAtNextPage();
=======
      case "LoginPage":  return new LoginPage();
      case "FavouritesPage":  return new FavouritesPage();
      case "ShoppingBagPage":  return new ShoppingBagPage();
>>>>>>> master
      default : throw `Page ${marketType} is not defined in the page helper`;
    }
  }
 
}

export default PageHelper;
