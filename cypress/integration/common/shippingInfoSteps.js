import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ShippingInfoPage from "../../support/PageObjects/common/desktop/ShippingInfoPage";

Then("I should be taken to Shipping Information page", () => {
var shippingInfoPage = new ShippingInfoPage();
shippingInfoPage.verifyPageIsDisplayed();
});