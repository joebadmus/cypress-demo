Feature: Footer

    I want to see the footer

    @smoke
    Scenario: Check Footer Exists France
        Given I Open the Intl Homepage for "fr"
        Then "fr" Homepage should be shown
        And I check the footer is displayed

    @smoke
    Scenario: Check Footer Exists Hungary
        Given I Open the Intl Homepage for "hu"
        Then "hu" Homepage should be shown
        And I check the footer is displayed