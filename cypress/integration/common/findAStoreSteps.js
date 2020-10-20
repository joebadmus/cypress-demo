import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";

Then("I should be taken to the Find a Store page", () => {
    let findAStorePage = PageHelper.createPagewith('FindAStorePage');
    findAStorePage.findAStoreContentSection().verifyPageIsDisplayed();
});