@international @footer  @desktop @ignore
Feature: International Footer Links
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links


    Scenario Outline: Platform Mod enabled footer content are displayed correctly
        Given I am an "anonymous" user "desktop" on "<domain>" viewing "Home".
        When I am viewing the footer of the page
        Then I should see all footer content are displayed correctly
            | footer_content |
            | Social Media   |
            | MyAccount      |
            | Quickshop      |
            | LinkLists      |


        Examples:
            | domain      |
            | Austria     |
            | Canada      |
            | Czech       |
            | Mexico      |
            | Bulgaria    |
            | Bahrain     |
            | Croatia     |
            | Turkey      |
            | Thailand    |
            | Taiwan      |
            | USA         |
            | Sweden      |
            | Switzerland |


    Scenario Outline: PlatMod enabled footer content are displayed correctly for duolingo
        Given I am an "anonymous" user "desktop" on "<domain>" viewing "Home".
        When I am viewing the footer of the page for the second language
        Then I should see all footer content are displayed correctly
            | footer_content |
            | Social Media   |
            | MyAccount      |
            | Quickshop      |
            | LinkLists      |


        Examples:
            | domain   |
            | Canada   |
            | Austria  |
            | Bahrain  |
            | Bulgaria |
            | Czech    |




# | Canada      | Quickshop |
# | Mexico      | Home      |
# | Mexico      | Quickshop |
# | Bulgaria    | Home      |
# | Bulgaria    | Quickshop |
# | Croatia     | Home      |
# | Croatia     | Quickshop |
# | Turkey      | Home      |
# | Turkey      | Quickshop |
# | Thailand    | Home      |
# | Thailand    | Quickshop |
# | Taiwan      | Home      |
# | Taiwan      | Quickshop |
# | USA         | Home      |
# | USA         | Quickshop |
# | Sweden      | Home      |
# | Sweden      | Quickshop |
# | Switzerland | Home      |
# | Switzerland | Quickshop |


