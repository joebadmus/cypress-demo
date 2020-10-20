@international @footer @desktop
Feature: Platform Mod International Find a Store
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links
 
 @findAStore
    Scenario: Platform Mod Footer Check Find a Store Page is Displayed
        Given I am an "anonymous" user on "desktop" visiting "Iceland" viewing "Home" page
        When I am viewing the footer of the page
        And I select the "Find a Store" link from the footer
        Then I should be taken to the Find a Store page

      