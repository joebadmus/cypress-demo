@mexico @international @footer @desktop
Feature: Mexico Footer Links
    In order to be taken to correct location on the Next site
    As a user in Mexico
    I want to be taken to the correct location from the footer links

    Scenario: MX_Homepage Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "MX_Home" page
        When I am viewing the footer of the page
        Then I should see that the footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |
        And I should see that the view mobile site link is present

    Scenario: MX_Quickshop Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "MX_Quickshop" page
        When I am viewing the footer of the page
        Then I should see that the footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |
        And I should see that the view mobile site link is present

