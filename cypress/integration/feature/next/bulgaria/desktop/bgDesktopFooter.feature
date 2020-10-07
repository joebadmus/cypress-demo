Feature: Bulgaria Footer Links
    In order to be taken to correct location on the Next site
    As a user in Bulgaria
    I want to be taken to the correct location from the footer links

    @bulgaria
    @international
    @footer
    @desktop
    Scenario: Bulgaria Homepage Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "BG_Home" page
        And I am viewing the footer of the page
        Then I should see that the footer links are grouped as shown
            | Помощ                   | Поверителност_и_правни_въпроси  | Други_услуги       |
            | Таблица с размерите     | Декларация за поверителност     | Медии и преса      |
            | Информация за връщане   | Общи условия                    | За компанията      |
            | Информация за доставка  |                                 | Работа в Next      |
            | Свържете се с нас       |                                 | Франчайзинг с Next |
            | Карта на сайта          |                                 |                    |
        And I should see that the view mobile site link is present



    @bulgaria
    @international
    @footer
    @desktop
    Scenario: Bulgaria Quickshop Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "BG_Quickshop" page
        And I am viewing the footer of the page
        Then I should see that the footer links are grouped as shown
            | Помощ                   | Поверителност_и_правни_въпроси | Други_услуги       |
            | Таблица с размерите     | Декларация за поверителност    | Медии и преса      |
            | Информация за връщане   | Общи условия                   | За компанията      |
            | Информация за доставка  |                                | Работа в Next      |
            | Свържете се с нас       |                                | Франчайзинг с Next |
            | Карта на сайта          |                                |                    |
        And I should see that the view mobile site link is present




