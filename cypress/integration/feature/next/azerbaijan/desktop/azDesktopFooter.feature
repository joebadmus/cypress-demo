 @azerbaijan @international @footer @desktop
Feature: AZ Footer Links
    In order to be taken to correct location on the Next UK site
    As a AZ new user
    I want to be able to see the foot links

    Scenario: Azerbaijan Homepage Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "AZ_Home" page
        And I am viewing the footer of the page
        Then I should see that the footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |



 
    Scenario: Azerbaijan Quickshop Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "AZ_Quickshop" page
        And I am viewing the footer of the page
        Then I should see that the footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |


