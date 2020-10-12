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
import UaDesktopHomePage from "../../support/pageObjects/ukraine/UaDesktopHomePage";
import UaDesktopQuickshopPage from "../../support/pageObjects/ukraine/UaDesktopQuickshopPage";
import AeDesktopHomePage from "../../support/pageObjects/uae/AeDesktopHomePage";
import AeDesktopQuickshopPage from "../../support/pageObjects/uae/AeDesktopQuickshopPage";
import UsDesktopHomePage from "../../support/pageObjects/usa/UsDesktopHomePage";
import UsDesktopQuickshopPage from "../../support/pageObjects/usa/UsDesktopQuickshopPage";
import ChDesktopHomePage from "../../support/pageObjects/switzerland/ChDesktopHomePage";
import ChDesktopQuickshopPage from "../../support/pageObjects/switzerland/ChDesktopQuickshopPage";
import SeDesktopHomePage from "../../support/pageObjects/sweden/SeDesktopHomePage";
import SeDesktopQuickshopPage from "../../support/pageObjects/sweden/SeDesktopQuickshopPage";
import ContactUsPage from "../pageObjects/common/desktop/ContactUsPage";
import ReturnsInformationPage from "../pageObjects/common/desktop/ReturnsInformationPage";
import SitemapPage from "../pageObjects/common/desktop/SitemapPage";


class PageHelper {
 static createPagewith(marketType) {
  debugger;
    switch (marketType) {
      case "MX_Quickshop": return new MxDesktopQuickshopPage();
      case "MX_Home":  return new MxDesktopHomePage();
      case "AM_Quickshop":  return new AmDesktopQuickshopPage();
      case "AM_Home":  return new AmDesktopHomePage();
      case "AU_Quickshop":  return new AuDesktopQuickshopPage();
      case "AU_Home":  return new AuDesktopHomePage();
      case "AT_Quickshop":  return new AtDesktopQuickshopPage();
      case "AT_Home":  return new AtDesktopHomePage();
      case "AZ_Quickshop":  return new AzDesktopQuickshopPage();
      case "AZ_Home":  return new AzDesktopHomePage();
      case "BH_Quickshop":  return new BhDesktopQuickshopPage();
      case "BH_Home":  return new BhDesktopHomePage();
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
      case "UA_Quickshop": return new UaDesktopQuickshopPage();
      case "UA_Home":  return new UaDesktopHomePage();
      case "AE_Quickshop": return new AeDesktopQuickshopPage();
      case "AE_Home":  return new AeDesktopHomePage();
      case "US_Quickshop": return new UsDesktopQuickshopPage();
      case "US_Home":  return new UsDesktopHomePage();
      case "US_Quickshop":  return new UsDesktopQuickshopPage();
      case "CH_Quickshop": return new ChDesktopQuickshopPage();
      case "CH_Home":  return new ChDesktopHomePage();
      case "SE_Home":  return new SeDesktopHomePage();
      case "SE_Quickshop":  return new SeDesktopQuickshopPage();
      case "ContactUsPage":  return new ContactUsPage();
      case "ReturnsInformationPage":  return new ReturnsInformationPage();
      case "SitemapPage":  return new SitemapPage();
      default : throw `Page ${marketType} is not defined in the page helper`;
    }
  }
}

export default PageHelper;
