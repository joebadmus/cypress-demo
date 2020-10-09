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
import CaDesktopHomePage from "../../support/pageObjects/canada/CaDesktopHomePage";
import CaDesktopQuickshopPage from "../../support/pageObjects/canada/CaDesktopQuickshopPage";
import HrDesktopHomePage from "../../support/pageObjects/croatia/HrDesktopHomePage";
import HrDesktopQuickshopPage from "../../support/pageObjects/croatia/HrDesktopQuickshopPage";
import DkDesktopHomePage from "../../support/pageObjects/denmark/DkDesktopHomePage";
import DkDesktopQuickshopPage from "../../support/pageObjects/denmark/DkDesktopQuickshopPage";

import TrDesktopHomePage from "../../support/pageObjects/turkey/TrDesktopHomePage";
import TrDesktopQuickshopPage from "../../support/pageObjects/turkey/TrDesktopQuickshopPage";
import ThDesktopHomePage from "../../support/pageObjects/thailand/ThDesktopHomePage";
import ThDesktopQuickshopPage from "../../support/pageObjects/thailand/ThDesktopQuickshopPage";
import TwDesktopHomePage from "../../support/pageObjects/taiwan/TwDesktopHomePage";
import TwDesktopQuickshopPage from "../../support/pageObjects/taiwan/TwDesktopQuickshopPage";


class PageHelper {
 static createPagewith(marketType) {
    switch (marketType) {
      case "MX_Quickshop": return new MxDesktopQuickshopPage();
      case "MX_Home":  return new MxDesktopHomePage();
      case "AM_Quickshop":  return new AmDesktopQuickshopPage();
      case "AM_Homepage":  return new AmDesktopHomePage();
      case "AU_Quickshop":  return new AuDesktopQuickshopPage();
      case "AU_Homepage":  return new AuDesktopHomePage();
      case "AT_Quickshop":  return new AtDesktopQuickshopPage();
      case "AT_Homepage":  return new AtDesktopHomePage();
      case "AZ_Quickshop":  return new AzDesktopQuickshopPage();
      case "AZ_Homepage":  return new AzDesktopHomePage();
      case "BH_Quickshop":  return new BhDesktopHomePage();
      case "BH_Homepage":  return new BhDesktopQuickshopPage();
      case "BG_Quickshop":  return new BgDesktopQuickshopPage();
      case "BG_Home":  return new BgDesktopHomePage();
      case "CA_Home":  return new CaDesktopHomePage();
      case "CA_Quickshop":  return new CaDesktopQuickshopPage();
      case "HR_Home":  return new HrDesktopHomePage();
      case "HR_Quickshop":  return new HrDesktopQuickshopPage();
      case "DK_Home":  return new DkDesktopHomePage();
      case "DK_Quickshop":  return new DkDesktopQuickshopPage();
      case "TR_Quickshop": return new TrDesktopQuickshopPage();
      case "TR_Home":  return new TrDesktopHomePage();
      case "TH_Quickshop": return new ThDesktopQuickshopPage();
      case "TH_Home":  return new ThDesktopHomePage();
      case "TW_Quickshop": return new TwDesktopQuickshopPage();
      case "TW_Home":  return new TwDesktopHomePage();
      default : throw `Page ${marketType} is not defined in the page helper`;
    }
  }
}

export default PageHelper;
