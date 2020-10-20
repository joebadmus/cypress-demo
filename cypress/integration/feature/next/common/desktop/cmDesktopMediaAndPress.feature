@international @footer  @desktop @ignore
Feature: Platform Mod International Media & Press Page
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links

    Scenario: Platform Mod Footer Check Media & Press Page is Displayed
        Given I am an "anonymous" user on "desktop" visiting "Armenia" viewing "Media&Press" page
        Then I should be taken to the Media and Press page
