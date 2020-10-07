Feature: International Footer Links
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links

    @international
    @footer
    @desktop
    Scenario: International Homepage Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user on the "desktop" on any international Homepage
        When I select the footer links in any the next international countries
        And I should be taken to the correct page based on selected link


        # Then I should see that the footer links are grouped as shown
        #     | Help                 | Privacy_n_Legal    | Other_Services |
        #     | Size Guide           | Privacy Policy     | Media & Press  |
        #     | Returns Information  | Terms & Conditions | The Company    |
        #     | Shipping Information |                    | Careers@next   |
        #     | Contact Us           |                    | Next Franchise |
        #     | Sitemap              |                    |                |
        # And I should see that the view mobile site link is present

    