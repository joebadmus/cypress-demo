import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";

Then("I should be taken to Careers at next page", () => {
    var careersAtNextPage = PageHelper.createPagewith('CareersAtNextPage');
    careersAtNextPage.CareersAtNextContentSection().verifyPageIsDisplayed();
});