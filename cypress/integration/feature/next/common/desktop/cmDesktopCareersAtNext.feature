@international @footer  @desktop @ignore
Feature: Platform Mod International Careers@next
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links

    Scenario Outline: Platform Mod Check Careers@next Page is Displayed
        Given I am an "anonymous" user "desktop" on "<domain>" viewing "CareersAtNext".
        When I am viewing the footer of the page
        Then I should be taken to Careers at next page

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
            #| UAE         |
            #| Ukraine     |
            | USA         |
            | Spain       |
            | South_Korea |
            | Serbia      |
            | Romania     |
            | Qatar       |
            | Singapore   |
