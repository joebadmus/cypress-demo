import AmDesktopQuickshopPage from "../../support/pageObjects/armenia/AmDesktopQuickshopPage"
import AmDesktopHomePage from "../../support/pageObjects/armenia/AmDesktopHomePage"
import AuDesktopQuickshopPage from "../../support/pageObjects/australia/AuDesktopQuickshopPage"
import AuDesktopHomePage from "../../support/pageObjects/australia/AuDesktopQuickshopPage"
import AtDesktopQuickshopPage from "../../support/pageObjects/austria/AtDesktopQuickshopPage"
import AtDesktopHomePage from "../../support/pageObjects/austria/AtDesktopHomePage"
import AzDesktopQuickshopPage from "../../support/pageObjects/azerbaijan/AzDesktopQuickshopPage"
import AzDesktopHomePage from "../../support/pageObjects/azerbaijan/AzDesktopQuickshopPage"
import BhDesktopQuickshopPage from "../../support/pageObjects/bahrain/BhDesktopQuickshopPage"
import BhDesktopHomePage from "../../support/pageObjects/bahrain/BhDesktopQuickshopPage"
import BgDesktopQuickshopPage from "../../support/pageObjects/bulgaria/BgDesktopQuickshopPage";
import BgDesktopHomePage from "../../support/pageObjects/bulgaria/BgDesktopHomePage";
import MxDesktopQuickshopPage from "../../support/pageObjects/mexico/MxDesktopQuickshopPage";
import MxDesktopHomePage from "../../support/pageObjects/mexico/MxDesktopHomePage";


class PageHelper {
  createPagewith(marketType) {
    switch (marketType) {
      case "MX_Quickshop": return new MxDesktopQuickshopPage();
      case "MX_Home":  return new MxDesktopHomePage();
      case "BG_Quickshop":  return new BgDesktopQuickshopPage();
      case "AM_Quickshop":  return new AmDesktopQuickshopPage();
      case "AM_Homepage":  return new AmDesktopHomePage();
      case "AU_Quickshop":  return new AuDesktopQuickshopPage();
      case "AU_Homepage":  return new AuDesktopHomePage();
      case "AT_Quickshop":  return new AtDesktopQuickshopPage();
      case "AT_Homepage":  return new AtDesktopHomePage();
      case "AZ_Quickshop":  return new AzDesktopQuickshopPage();
      case "AZ_Homepage":  return new AzDesktopHomePage();
      case "BH_Quickshop":  return new BgDesktopHomePage();
      case "BH_Homepage":  return new BgDesktopQuickshopPage();
      case "BG_Home":  return new BgDesktopHomePage();
      default : throw `Page ${marketType} is not defined in the page helper`;
    }
  }
}

export default PageHelper;
