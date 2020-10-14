import FooterSection from "../../../pageSections/FooterSection";
import StorefrontContentSection from "../../../pageSections/StorefrontContentSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";

class ShippingInfoPage {
  headerTopBarSection() {
    return new HeaderTopBarSection();
  }
  storefrontContentSection() {
    return new StorefrontContentSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default ShippingInfoPage;
