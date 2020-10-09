@armenia @international @footer @desktop

Feature: AM Footer Links
    In order to be taken to correct location on the Next UK site
    As a AM new user
    I want to be able to see the foot links


    Scenario: Armenia Homepage Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "AM_Homepage" page
        And I am viewing the footer of the page
        Then I should see that the footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |



    Scenario: Armenia Quickshop Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "AM_Quickshop" page
        And I am viewing the footer of the page
        Then I should see that the footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |





