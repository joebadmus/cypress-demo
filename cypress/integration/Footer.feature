Feature: Footer

    I want to see the footer
    @smoke
    Scenario: Check Footer Exists
        Given I Open the Intl Homepage for "France"
        Then "France" Homepage should be shown
        And I check the footer is displayed