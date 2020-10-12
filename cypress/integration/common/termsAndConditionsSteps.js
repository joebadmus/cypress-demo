import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import TermsAndConditionsPage from "../../support/PageObjects/common/desktop/TermsAndConditionsPage";
import PageHelper from "../../support/testHelpers/PageHelper";
import TestDataHelper from "../../support/testHelpers/TestDataHelper";

Then("I should be taken to the Terms and Conditions page", () => {
    let termsAndConditionsPage = PageHelper.createPagewith("TermsAndConditionsPage");
    termsAndConditionsPage.verifyPageIsDisplayed();
});

