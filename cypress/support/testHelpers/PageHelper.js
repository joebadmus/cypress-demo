import BgDesktopQuickshopPage from "../../support/pageObjects/bulgaria/BgDesktopQuickshopPage";
import BgDesktopHomePage from "../../support/pageObjects/bulgaria/BgDesktopHomePage";
import MxDesktopQuickshopPage from "../../support/pageObjects/mexico/MxDesktopQuickshopPage";
import MxDesktopHomePage from "../../support/pageObjects/mexico/MxDesktopHomePage";
import CaDesktopHomePage from "../../support/pageObjects/canada/CaDesktopHomePage";
import CaDesktopQuickshopPage from "../../support/pageObjects/canada/CaDesktopQuickshopPage";
import HrDesktopHomePage from "../../support/pageObjects/croatia/HrDesktopHomePage";
import HrDesktopQuickshopPage from "../../support/pageObjects/croatia/HrDesktopQuickshopPage";
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


class PageHelper {
  createPagewith(marketType) {
    switch (marketType) {
      case "MX_Quickshop": return new MxDesktopQuickshopPage();
      case "MX_Home":  return new MxDesktopHomePage();
      case "BG_Quickshop":  return new BgDesktopQuickshopPage();
      case "BG_Home":  return new BgDesktopHomePage();
      case "CA_Home":  return new CaDesktopHomePage();
      case "CA_Quickshop":  return new CaDesktopQuickshopPage();
      case "HR_Home":  return new HrDesktopHomePage();
      case "HR_Quickshop":  return new HrDesktopQuickshopPage();
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
      case "CH_Quickshop": return new ChDesktopQuickshopPage();
      case "CH_Home":  return new ChDesktopHomePage();
      case "SE_Quickshop": return new SeDesktopQuickshopPage();
      case "SE_Home":  return new SeDesktopHomePage();
      default : throw `Page ${marketType} is not defined in the page helper`;
    }
  }
}

export default PageHelper;
