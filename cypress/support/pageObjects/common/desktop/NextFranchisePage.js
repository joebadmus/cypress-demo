import FooterSection from "../../../pageSections/FooterSection";
import NextFranchiseMainGridSection from "../../../pageSections/NextFranchiseMainGridSection";
class NextFranchisePage {
 
  NextFranchiseMainGridSection(){
    return new NextFranchiseMainGridSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default NextFranchisePage;
