import MxDesktopQuickshopPage from "../../support/pageObjects/mexico/MxDesktopQuickshopPage"
import MxDesktopHomePage from "../../support/pageObjects/mexico/MxDesktopHomePage"
import AmDesktopHomePage from "../../support/pageObjects/armenia/AmDesktopHomePage"
import AmDesktopQuickshopPage from "../../support/pageObjects/armenia/AmDesktopQuickshopPage"
import AuDesktopHomePage from "../../support/pageObjects/australia/AuDesktopQuickshopPage"
import AuDesktopQuickshopPage from "../../support/pageObjects/australia/AuDesktopQuickshopPage"


class PageHelper{
    
    createPagewith(marketType) {
        if (marketType === "MX_Quickshop") return new MxDesktopQuickshopPage();
        if (marketType === "MX_Homepage") return new MxDesktopHomePage();
        if (marketType === "AM_Quickshop") return new AmDesktopQuickshopPage();
        if (marketType === "AM_Homepage") return new AmDesktopHomePage();
        if (marketType === "AU_Homepage") return new AuDesktopHomePage();
        if (marketType === "AU_Quickshop") return new AuDesktopQuickshopPage();
        //throw new Error('Page not found');
        
    }
}

export default PageHelper;