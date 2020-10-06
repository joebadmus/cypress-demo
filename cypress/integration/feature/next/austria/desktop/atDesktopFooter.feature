Feature: AT Footer Links
    In order to be taken to correct location on the Next Austria site
    As a AT new user
    I want to be able to see the foot links

    @austria
    @footer
    Scenario: AT_Homepage Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "AT_Homepage" site
        And I am viewing the footer of the page
        Then I should see that the Next_AT footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |

        And all the Next Austria footer links should lead to correct locations


    @austria
    @footer
    Scenario: AT_Quickshop Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "AT_Quickshop" site
        And I am viewing the footer of the page
        Then I should see that the Next_AT footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |

        And all the Next Austria footer links should lead to correct locations

