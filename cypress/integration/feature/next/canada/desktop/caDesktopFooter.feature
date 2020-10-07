Feature: Canada Footer Links
    In order to be taken to correct location on the Next site
    As a user in Canada
    I want to be taken to the correct location from the footer links

    @canada
    @international
    @footer
    @desktop
    Scenario: Canada Homepage Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "CA_Home" page
        And I am viewing the footer of the page
        Then I should see that the footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |
        And I should see that the view mobile site link is present

    @canada
    @international
    @footer
    @desktop
    Scenario: Canada Quickshop Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "CA_Quickshop" page
        And I am viewing the footer of the page
        Then I should see that the footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |
        And I should see that the view mobile site link is present

