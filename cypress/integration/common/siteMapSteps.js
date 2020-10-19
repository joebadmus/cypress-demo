import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";


Then("I should be taken to the sitemap page", () => {

let sitemapPage = PageHelper.createPagewith("SitemapPage");
sitemapPage.sitemapContentSection().verifyPageIsDisplayed();
});