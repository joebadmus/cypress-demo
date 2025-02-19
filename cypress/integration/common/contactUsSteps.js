import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";

Then("I should be taken to the Contact Us page", () => {
  let contactUsPage = PageHelper.createPagewith("ContactUsPage");

  contactUsPage.StorefrontContentSection().verifyPageIsDisplayed();
});
