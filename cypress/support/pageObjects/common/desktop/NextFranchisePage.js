import FooterSection from "../../../pageSections/FooterSection";
import NextFranchiseMainGridSection from "../../../pageSections/NextFranchiseMainGridSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";


class NextFranchisePage {
 
  headerTopBarSection(){
    return new HeaderTopBarSection();
  }
  
  NextFranchiseMainGridSection(){
    return new NextFranchiseMainGridSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default NextFranchisePage;
