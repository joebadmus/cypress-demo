import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ReturnsInformationPage from "../../support/pageObjects/common/desktop/ReturnsInformationPage";


//TODO This needs to be added to Page helper
Then("I should be taken to Returns Information page", () => {
let returnInformationPage = new ReturnsInformationPage();

returnInformationPage.checkPageIsDisplayed();
});