@international @footer  @desktop 
Feature: Platform Mod International Privacy Policy
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links

 @contactus
    Scenario Outline: Platform Mod Footer Check Privacy Policy Page is Displayed
        Given I am an "anonymous" user on "desktop" visiting "<domain>" viewing "Home" page
        When I am viewing the footer of the page
        And I select the "Privacy Policy" link from the footer
        Then I should be taken to the Privacy Policy page

        Examples:
            | domain      |   
            | Armenia     |
            | Australia   |
            | Austria     |
            | Azerbaijan  |
            | Bulgaria    |
            | Bahrain     |
            | Canada      |
            | Croatia     |
            | Denmark     |
            | Mexico      |
            | Sweden      |
            | Switzerland |
            | Taiwan      |
            | Thailand    |
            | Turkey      |
            # | UAE         |
            # | Ukraine     |
            | USA         |
            | Spain       |
            | South_Korea |
            | Serbia      |
            | Romania     |
            | Qatar       |
            | Singapore   |
            | Portugal    |
            | Norway      |
            | Lithuania   |
            | Philippines |
            | Oman        |
            | Greece      |
            | Gibraltar   |
