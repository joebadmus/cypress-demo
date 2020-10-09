@international @footer @desktop @ignore
Feature: Platform Mod International Contact Us
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links

    Scenario Outline: Platform Mod Check Contact Us Page is Displayed
        Given I am an "anonymous" user "desktop" on "<domain>" vewing "Home".
        When I am viewing the footer of the page
        And I select the "Contact Us" from the footer
        Then I should be taken to Contact Us page

        Examples:
            | domain      | 
            | Canada      | 
            # | Mexico      | 
            # | Bulgaria    | 
            # | Croatia     | 
            # | Turkey      | 
            # | Thailand    | 
            # | Taiwan      | 
            # | USA         | 
            # | Sweden      | 
            # | Switzerland | 
