Feature: AZ Footer Links
    In order to be taken to correct location on the Next UK site
    As a AZ new user
    I want to be able to see the foot links

    @azerbaijan
    @international
    @footer
    Scenario: AZ_Homepage Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "AZ_Homepage" site
        And I am viewing the footer of the page
        Then I should see that the Next_AZ footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |

        And all the Next Azerbaijan footer links should lead to correct locations


    @azerbaijan
    @international
    @footer
    Scenario: AZ_Quickshop Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "AZ_Quickshop" site
        And I am viewing the footer of the page
        Then I should see that the Next_AZ footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |

        And all the Next Azerbaijan footer links should lead to correct locations

