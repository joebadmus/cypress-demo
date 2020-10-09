@croatia @international @footer @desktop
Feature: Croatia Footer Links
    In order to be taken to correct location on the Next site
    As a user in Croatia
    I want to be taken to the correct location from the footer links

    Scenario: HR_Homepage Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "HR_Home" page
        When I am viewing the footer of the page
        Then I should see that the footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |
        And I should see that the view mobile site link is present

    Scenario: HR_Quickshop Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "HR_Quickshop" page
        When I am viewing the footer of the page
        Then I should see that the footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |
        And I should see that the view mobile site link is present


#    Scenario Outline: Platform Mod enabled footer content are displayed correctly
#         Given I am an "anonymous" user "desktop" on "<domain>" vewing "<page>".
#         When I am viewing the footer of the page
#         Then I should see all footer content are displayed correctly
#             | footer_content |
#             | Social Media   |
#             | MyAccount      |
#             | Quickshop      |
#             | LinkLists      |


#         Examples:
#              | domain | page      |
#              | Canada | Quickshop |