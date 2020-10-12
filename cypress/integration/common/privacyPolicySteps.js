import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";

Then("I should be taken to Privacy Policy page", () => {
    var privacyPolicyPage = PageHelper.createPagewith('PrivacyPolicyPage');
    privacyPolicyPage.verifyBreadcrumbHasPrivacyPolicyText();
});