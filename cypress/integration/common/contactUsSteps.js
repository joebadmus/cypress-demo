//import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";
import TestDataHelper from "../../support/testHelpers/TestDataHelper";
import ContactUsPage from "../../support/pageObjects/common/desktop/ContactUsPage"

Then("I should be taken to Contact Us page", () => {
    globalThis.page = PageHelper.createPagewith("ContactUsPage");
    page.checkContactUsPageIsDisplayed()
    
   // page.validateContactUsPage();
    });
  
