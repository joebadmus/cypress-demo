@international @footer  @desktop
Feature: International Footer Links
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links


    Scenario Outline: Platform Mod Footer Content Is Displayed Correctly
        Given I am an "anonymous" user on "desktop" visiting "<domain>" viewing "Home" page
        When I am viewing the footer of the page
        Then I should see all footer content are displayed correctly
            | footer_content |
            | Social Media   |
            | MyAccount      |
            | Quickshop      |
            | LinkLists      |

        Examples:
             | domain      |
             | Armenia      |
             | Australia    |
             | Austria      |
             | Azerbaijan   |
             | Bahrain      |           
             | Bulgaria     |
             | Canada       |
             | Croatia      |
             | Czech        |
             | Denmark      |
             | Gibraltar    |
             | Greece       |
             | Indonesia    |
             | Italy        |
             | Kuwait       |
             | Latvia       |
             | Lithuania    |
             | Malaysia     |
             | Malta        |
             | Mexico       |
             | New_Zealand  |
             | Norway       |
             | Oman         |
             | Philippines  |
             | Portugal     |
             | Qatar        |
             | Romania      |
             | Serbia       |
             | Singapore    |
             | South_Africa |
             | South_Korea  |
             | Spain        |
             | Sweden       |
             | Switzerland  |
             | Taiwan       |
             | Thailand     |
             | Turkey       |
             #| UAE          |
             #| UK           |
             #| Ukraine      |
             | USA          |





    Scenario Outline: PlatMod enabled footer content are displayed correctly both languages
        Given I am an "anonymous" user on "desktop" visiting "<domain>" viewing "Home" page
        When I am viewing the footer of the page for the second language
        Then I should see all footer content are displayed correctly
            | footer_content |
            | Social Media   |
            | MyAccount      |
            | Quickshop      |
            | LinkLists      |

        Examples:
            | domain      | 
            | Canada      | 
            | Austria     | 
            | Bahrain     | 
            | Czech       | 
            | Bulgaria    | 
            | South_Korea | 
            | Spain       | 
            | Romania     | 
            | Qatar       | 
            | Lithuania   |
            | Canada      |
            | Austria     |
            | Bahrain     |
            | Czech       |
            | Bulgaria    |
            | South_Korea |
            | Spain       |
            | Romania     |
            | Qatar       |
            | Oman        |
            | Greece      |



    Scenario Outline: Platform Mod Footer Check All Expected Footer Enabled Pages
        Given I am an "anonymous" user on "desktop" visiting "<domain>" viewing "Home" page
            | Malaysia    |
            | Latvia      |
            | Italy       |
            | Kuwait      |





 Scenario Outline: PlatMod enabled footer all pages
        Given I am an "anonymous" user on "desktop" visiting "<domain>" viewing "Home" page
        When I navigate to the pages from home
            | page                |
            | Landing               |
            | Login               |
            | Favourites          |
            | Quickshop           |
            | ReturnsInformation  |
            | ShippingInformation |
            | TermsAndConditions  |
            | NextFranchise       |
            | PrivacyPolicy       |
            | ContactUs           |
            | Sitemap             |
            | ShoppingBag         |
            | ProductList         |
            # | AccountSummary      |
            
        Then I should see that the new platform mod footer is present

        Examples:
            | domain       |
            | Armenia      |
            | Australia    |
            | Austria      |
            | Azerbaijan   |
            | Bahrain      |           
            | Bulgaria     |
            | Canada       |
            | Croatia      |
            | Czech        |
       
