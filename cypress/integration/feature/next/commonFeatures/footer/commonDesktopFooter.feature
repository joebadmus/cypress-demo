@international @footer  @desktop @ignore
Feature: International Footer Links
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links

    # Not possible
    # Scenario: International Homepage Desktop Footer Links are displayed correctly
    #     Given I am an "anonymous" user on the "desktop" on any international Homepage
    #     When I select the footer links in any the next international countries
    #     And I should be taken to the correct page based on selected link


 Scenario Outline name: International Homepage Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on <international home> page
        And I am viewing the footer of the page
        Then I should see that all the footer links are displayed corrected
        And selecting the links should lead to correct location

        Example: 
        |international home |
        |MX_Home|


    