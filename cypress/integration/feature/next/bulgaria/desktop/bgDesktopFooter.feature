Feature: Bulgaria Footer Links
    In order to be taken to correct location on the Next UK site
    As a new user in Bulgaria
    I want to be able to be taken to the correct location from footer links

    @mexico
    @international
    @footer
    Scenario: BG_Homepage Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "BG_Home" page
        And i am viewing the footer of the page
        Then i should see that the Next_BG footer links are grouped as shown
            | Помощ                   | Поверителност_и_правни_въпроси | Други_услуги       |
            | Таблица с размерите     | Декларация за поверителност    | Медии и преса      |
            | Информация за връщане   | Общи условия                   | За компанията      |
            | Информация за доставка  |                                | Работа в Next      |
            | Свържете се с нас       |                                | Франчайзинг с Next |
            | Карта на сайта          |                                |                    |
        
        And all the Next Bulgaria footer links should lead to correct locations


    @mexico
    @international
    @footer
    Scenario: MX_Quickshop Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "BG_Quickshop" page
        And i am viewing the footer of the page
        Then i should see that the Next_BG footer links are grouped as shown
            | Помощ                   | Поверителност_и_правни_въпроси | Други_услуги       |
            | Таблица с размерите     | Декларация за поверителност    | Медии и преса      |
            | Информация за връщане   | Общи условия                   | За компанията      |
            | Информация за доставка  |                                | Работа в Next      |
            | Свържете се с нас       |                                | Франчайзинг с Next |
            | Карта на сайта          |                                |                    |

        And all the Next Bulgaria footer links should lead to correct locations



