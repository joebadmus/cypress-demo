Feature: AM Footer Links
    In order to be taken to correct location on the Next UK site
    As a AM new user
    I want to be able to see the foot links

    @armenia
    @international
    @footer
    Scenario: AM_Homepage Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "AM_Homepage" site
        And I am viewing the footer of the page
        Then I should see that the Next_AM footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |

        And all the Next Armenia footer links should lead to correct locations


    @armenia
    @international
    @footer
    Scenario: AM_Quickshop Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "AM_Quickshop" site
        And I am viewing the footer of the page
        Then I should see that the Next_AM footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |

        And all the Next Armenia footer links should lead to correct locations

