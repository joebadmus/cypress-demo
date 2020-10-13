import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";

Then("I should be taken to Shipping Information page", () => {
    var shippingInfoPage = PageHelper.createPagewith('ShippingInfoPage');
    shippingInfoPage.storefrontContentSection().verifyPageIsDisplayed();
});