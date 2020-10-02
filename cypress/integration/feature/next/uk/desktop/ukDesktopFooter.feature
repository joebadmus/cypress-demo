Feature: Uk Footer Links
    In order to be taken to correct location on the Next UK site
    As a UK new user
    I want to be able to see the foot links

    # @uk
    # @desktop
    # @next
    # @anonymous
    # Scenario: UK Desktop Footer Links are displayed correctly
    #     Given I am an "anonymous" user "desktop" on "Next_UK" site
    #     And i am viewing the footer of the page
    #     Then i should see that the Next_UK footer links are grouped as shown
    #         | Help                         | Shopping_With_Us       | Privacy_and_Legal        | More_From_Next                    |
    #         | Frequently Asked Questions   | Next Credit Options    | Cookies & Privacy Policy | Next Mobile                       |
    #         | Contact Us                   | Next Unlimited         | Terms & Conditions       | Next App                          |
    #         | Delivery Information         | Evouchers              |                          | The Company                       |
    #         | Arrange A Return             | Gift Cards             |                          | Media & Press                     |
    #         | Product Recall               | Gift Experiences       |                          | Business 2 Business               |
    #         | Accessible Site              | Flowers, Plants & Wine |                          | Next Franchise                    |
    #         | Website Accessibility Policy |                        |                          | Careers @ Next                    |
    #         | Accessibility In Our Stores  |                        |                          | View our modern slavery statement |
    #         | Site Map                     |                        |                          | Corporate Responsibility Report   |
    #     And all the links to should lead to correct locations



    Scenario: MX Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "Next_MX" site
        And i am viewing the footer of the page
        Then i should see that the Next_MX footer links are grouped as shown
            | Help                 | Privacy_n_Legal    | Other_Services |
            | Size Guide           | Privacy Policy     | Media & Press  |
            | Returns Information  | Terms & Conditions | The Company    |
            | Shipping Information |                     | Careers@next   |
            | Contact Us           |                    | Next Franchise |
            | Sitemap              |                    |                |

        And all the links to should lead to correct locations

