Feature: BH Footer Links
    In order to be taken to correct location on the Next UK site
    As a BH new user
    I want to be able to see the foot links

    @bahrain
    @footer
    Scenario: BH_Homepage Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "BH_Homepage" site
        And i am viewing the footer of the page
        Then i should see that the Next_BH footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |

        And all the Next Bahrain footer links should lead to correct locations


    @bahrain
    @footer
    Scenario: BH_Quickshop Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "BH_Quickshop" site
        And i am viewing the footer of the page
        Then i should see that the Next_BH footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                    | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |

        And all the Next Bahrain footer links should lead to correct locations