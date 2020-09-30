Feature: Login

    I want to login  Conduit
    @smoke
    Scenario: Conduit Login
        Given I Open the conduit loging page
        When I type in username and password
            | username           | password |
            | j***bad***@***.com | ******54 |
        And I click on sign in button
        Then "Your Feed" should be shown