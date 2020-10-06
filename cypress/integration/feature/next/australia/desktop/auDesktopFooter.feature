Feature: AU Footer Links
    In order to be taken to correct location on the Next UK site
    As a AU new user
    I want to be able to see the foot links

    @australia
    @international
    @footer
    Scenario: AU_Homepage Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "AU_Homepage" site
        And I am viewing the footer of the page
        Then I should see that the Next_AU footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |

        And all the Next Australia footer links should lead to correct locations


    @australia
    @international
    @footer
    Scenario: AU_Quickshop Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "AU_Quickshop" site
        And I am viewing the footer of the page
        Then I should see that the Next_AU footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |

        And all the Next Australia footer links should lead to correct locations

