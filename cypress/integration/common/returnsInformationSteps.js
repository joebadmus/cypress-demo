  
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";


Then("I should be taken to the Returns Information page", () => {
let returnInformationPage = PageHelper.createPagewith("ReturnsInformationPage");

returnInformationPage.storefrontContentSection().verifyPageIsDisplayed();
});