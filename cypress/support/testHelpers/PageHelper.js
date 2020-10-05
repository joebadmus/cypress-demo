import MxDesktopQuickshopPage from "../../support/pageObjects/mexico/MxDesktopQuickshopPage"
import MxDesktopHomePage from "../../support/pageObjects/mexico/MxDesktopHomePage"

class PageHelper{
    
    createPagewith(marketType) {
        if (marketType === "MX_Quickshop") return new MxDesktopQuickshopPage();
        if (marketType === "MX_Homepage") return new MxDesktopHomePage();
        // throw new Error('Page not found');
        
    }
}

export default PageHelper;