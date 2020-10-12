@international @footer  @desktop @ignore
Feature: Platform Mod International Privacy Policy
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links

    Scenario Outline: Platform Mod Check Privacy Policy Page is Displayed
        Given I am an "anonymous" user "desktop" on "<domain>" viewing "Home".
        When I am viewing the footer of the page
        And I select the "Privacy Policy" from the footer
        Then I should be taken to Shipping Information page

        Examples:
            | domain      |   
            | Armenia     |
            | Australia   |
            | Austria     |
            | Azerbaijan  |
            | Bulgaria    |
            | Bahrain     | 
            | Canada      | 
            | Mexico      |          
            | Croatia     | 
            | Turkey      | 
            | Thailand    | 
            | Taiwan      | 
            | USA         | 
            | Sweden      |
            | Switzerland | 
