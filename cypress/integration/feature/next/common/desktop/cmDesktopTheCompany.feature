@international @footer  @desktop @ignore
Feature: Platform Mod International The Company Page
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links

    Scenario: Platform Mod Footer Check The Company Page is Displayed
        Given I am an "anonymous" user on "desktop" visiting "Armenia" viewing "TheCompany".
        Then I should be taken to the The Company page
