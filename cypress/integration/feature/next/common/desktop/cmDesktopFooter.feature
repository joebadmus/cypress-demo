@international1 @footer  @desktop @ignore
Feature: International Footer Links
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links


    Scenario Outline: Platform Mod enabled footer content are displayed correctly
        Given I am an "anonymous" user "desktop" on "<domain>" vewing "<page>".
        When I am viewing the footer of the page
        Then I should see all footer content are displayed correctly
            | footer_content |
            | Social Media   |
            | MyAccount      |
            | Quickshop      |
            | LinkLists      |


        Examples:
            | domain   | page      |
            | Canada   | Home      |
            | Canada   | Quickshop |
            | Mexico   | Home      |
            | Mexico   | Quickshop |
            | Bulgaria | Home      |
            | Bulgaria | Quickshop |
            | Croatia  | Home      |
            | Croatia  | Quickshop |
            | Turkey   | Home      |
            | Turkey   | Quickshop |
            | Thailand | Home      |
            | Thailand | Quickshop |

# Examples:
#     | international |
#     | MX_Quickshop  |
#     | MX_Home       |
# | CA_Home       |
# | CA_Quickshop  |
# | BG_Home       |
# | BG_Quickshop  |
# | HR_Home       |
# | HR_Quickshop  |
# | TH_Home       |
# | TH_Quickshop  |
# | TR_Home       |
# | TR_Quickshop  |

# https://docs.cypress.io/guides/references/error-messages.html#cy-visit-failed-because-you-are-attempting-to-visit-a-different-origin-domain
# And selecting the links should lead to correct location
