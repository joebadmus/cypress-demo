import FooterSection from "../../../pageSections/FooterSection";
import StorefrontContentSection from "../../../pageSections/StorefrontContentSection";
class ShippingInfoPage {

    storefrontContentSection() {
      return new StorefrontContentSection();
    }
  
    footerSection() {
      return new FooterSection();
    }
}

  export default ShippingInfoPage;
  