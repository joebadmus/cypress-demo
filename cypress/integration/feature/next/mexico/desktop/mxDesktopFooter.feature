Feature: MX Footer Links
    In order to be taken to correct location on the Next UK site
    As a UK new user
    I want to be able to see the foot links

    # @mx
    # @footer
    # Scenario: MX_Homepage Desktop Footer Links are displayed correctly
    #     Given I am an "anonymous" user "desktop" on "MX_Homepage" site
    #     And i am viewing the footer of the page
    #     Then i should see that the Next_MX footer links are grouped as shown
    #         | Help                 | Privacy_n_Legal    | Other_Services |
    #         | Size Guide           | Privacy Policy     | Media & Press  |
    #         | Returns Information  | Terms & Conditions | The Company    |
    #         | Shipping Information |                    | Careers@next   |
    #         | Contact Us           |                    | Next Franchise |
    #         | Sitemap              |                    |                |

    #     And all the "Next_mx_footer" to should lead to correct locations


         @mx
    @footer
    Scenario: MX_Quickshop Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "MX_Quickshop" site
        And i am viewing the footer of the page
        Then i should see that the Next_MX footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |

        And all the "Next_mx_footer" to should lead to correct locations

