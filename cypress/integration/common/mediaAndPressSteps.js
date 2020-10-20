import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";

Then("I should be taken to the Media and Press page", () => {
    let mediaAndPressPage = PageHelper.createPagewith('Media&PressPage');
    mediaAndPressPage.mediaAndPressContentSection().acceptCookieConsent();
    mediaAndPressPage.mediaAndPressContentSection().verifyPageIsDisplayed();
});