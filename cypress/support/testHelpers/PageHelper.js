import MxDesktopQuickshopPage from "../../support/pageObjects/mexico/MxDesktopQuickshopPage"
import MxDesktopHomePage from "../../support/pageObjects/mexico/MxDesktopHomePage"
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



class PageHelper{
    
    createPagewith(marketType) {
        if (marketType === "MX_Quickshop") return new MxDesktopQuickshopPage();
        if (marketType === "MX_Homepage") return new MxDesktopHomePage();
        if (marketType === "AM_Quickshop") return new AmDesktopQuickshopPage();
        if (marketType === "AM_Homepage") return new AmDesktopHomePage();
        if (marketType === "AU_Quickshop") return new AuDesktopQuickshopPage();
        if (marketType === "AU_Homepage") return new AuDesktopHomePage();      
        if (marketType === "AT_Quickshop") return new AtDesktopQuickshopPage();
        if (marketType === "AT_Homepage") return new AtDesktopHomePage();
        if (marketType === "AZ_Quickshop") return new AzDesktopQuickshopPage();
        if (marketType === "AZ_Homepage") return new AzDesktopHomePage();
        if (marketType === "BH_Quickshop") return new BhDesktopQuickshopPage();
        if (marketType === "BH_Homepage") return new BhDesktopHomePage();
        //throw new Error('Page not found');
        
    }
}

export default PageHelper;