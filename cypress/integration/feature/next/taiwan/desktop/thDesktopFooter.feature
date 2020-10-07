    @taiwan
    @international
    @footer
    @desktop
Feature: Taiwan Footer Links
    In order to be taken to correct location on the Next site
    As a user in Taiwan
    I want to be taken to the correct location from the footer links

    Scenario: Taiwan_Homepage Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "TW_Home" page
        And I am viewing the footer of the page
        Then I should see that the footer links are grouped as shown
            | 支援服務         | 隱私及法律    | 其他服務 |
            | 尺碼指南           |  隱私權政策     | 媒體新聞  |
            | 退貨資訊          | 條款及細則       | 公司簡介    |
            | 運送資訊 |                             |  Next人才招募  |
            | 聯絡我們           |                    |    Next加盟店            |
            |網站導覽             |           |                 |
        And I should see that the view mobile site link is present

    Scenario: Taiwan_Quickshop Desktop Footer Links are displayed correctly
        Given I am an "anonymous" user "desktop" on "TW_Quickshop" page
        And I am viewing the footer of the page
        Then I should see that the footer links are grouped as shown
             | 支援服務         | 隱私及法律    | 其他服務 |
            | 尺碼指南           |  隱私權政策     | 媒體新聞  |
            | 退貨資訊          | 條款及細則       | 公司簡介    |
            | 運送資訊 |                             |  Next人才招募  |
            | 聯絡我們           |                    |    Next加盟店            |
            |網站導覽             |           |                 |
        And I should see that the view mobile site link is present

