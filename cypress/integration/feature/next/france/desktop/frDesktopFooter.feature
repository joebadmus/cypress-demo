Feature: Uk Footer Links
    In order to be taken to correct location on the Next UK site
    As a UK new user
    I want to be able to see the foot links

    @uk
    @desktop
    @next
    @anonymous
    Scenario: FR Desktop Footer Links are displayed correctly
        # Given i am an anonymous desktop UK user on Next Uk site
        Given I am an "anonymous" user "desktop" on "Next_FR" site
        #  And i at the footer section of the home page
        And i am viewing the footer of the page
        Then i should see that the "Next_FR" footer links are grouped as shown
            | Help | Shopping_With_Us | Privacy_&_Legal | More_From_Next |
        # | Frequently Asked Questions   | Next Credit Options    | Cookies & Privacy Policy | Next Mobile                       |
        # | Contact Us                   | Next Unlimited         | Terms & Conditions       | Next App                          |
        # | Delivery Information         | Evouchers              |                          | The Company                       |
        # | Arrange A Return             | Gift Cards             |                          | Media & Press                     |
        # | Product Recall               | Gift Experiences       |                          | Business 2 Business               |
        # | Accessible Site              | Flowers, Plants & Wine |                          | Next Franchise                    |
        # | Website Accessibility Policy |                        |                          | Careers @ Next                    |
        # | Accessibility In Our Stores  |                        |                          | View our modern slavery statement |
        # | Site Map                     |                        |                          | Corporate Responsibility Report   |
        And all the "Next_FR" links to should lead to correct locations

