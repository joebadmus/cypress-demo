import FooterPage from "../FooterPage";
import FooterPage from "../../pageObjects/FooterPage";
class CaDesktopHomePage extends FooterPage {
 
  goto() {
    cy.visit(Cypress.env("caHomePageUrl"));
  }
}

export default CaDesktopHomePage;
