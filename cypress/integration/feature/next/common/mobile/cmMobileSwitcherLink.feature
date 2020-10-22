@international @mobile
Feature: Platform Mod International Site Guide
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the mobile site view mode


    Scenario Outline: Platform Mod Check mobile site view mode is Displayed
        Given I am an "anonymous" user on "desktop" visiting "<domain>" viewing "Home" page
        When I select the View mobile site link
        Then I should be taken to the mobile site view mode

        Examples:
            | domain      |
            | Armenia      |
            | Australia    |
            | Austria      |
            | Azerbaijan   |
            | Bahrain      |           
            | Bulgaria     |
            | Canada       |
            | Croatia      |
            | Cyprus       |
            | Czech        |
            | Denmark      |
            | Estonia      |
            | Finland      |
            | France       |
            | Georgia      |
            | Gibraltar    |
            | Greece       |
            | Hungary      |
            | Iceland      |
            | Indonesia    |
            | Italy        |
            | Kuwait       |
            | Latvia       |
            | Lebanon      |
            | Lithuania    |
            | Luxembourg   |
            | Malaysia     |
            | Malta        |
            | Mexico       |
            | New_Zealand  |
            | Norway       |
            | Oman         |
            | Philippines  |
            | Portugal     |
            | Qatar        |
            | Romania      |
            | Serbia       |
            | Singapore    |
            | South_Africa |
            | South_Korea  |
            | Spain        |
            | Sweden       |
            | Switzerland  |
            | Taiwan       |
            | Thailand     |
            | Turkey       |
            #| UAE          |
            #| UK           |
            #| Ukraine      |
            | USA          |