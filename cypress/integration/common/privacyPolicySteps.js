import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PrivacyPolicyPage from "../../support/PageObjects/common/desktop/PrivacyPolicyPage";

Then("I should be taken to Shipping Information page", () => {
var privacyPolicyPage = new PrivacyPolicyPage();
privacyPolicyPage.verifyPageIsDisplayed();
});