@international @mobile
Feature: Platform Mod International Site Guide
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the mobile site view mode

    Scenario Outline: Platform Mod Check mobile site view mode is Displayed
        Given I am an "anonymous" user "desktop" on "<domain>" viewing "Home".
        When I select the View mobile site link
        Then I should be taken to the mobile site view mode

        Examples:
            | domain      |
            | Armenia     |
            | Australia   |
            | Austria     |
            | Azerbaijan  |
            | Bulgaria    |
            | Bahrain     |
            | Canada      |
            | Croatia     |
            | Denmark     |
            | Mexico      |
            | Sweden      |
            | Switzerland |
            | Taiwan      |
            | Thailand    |
            | Turkey      |
            # | UAE         |
            #| Ukraine     |
            | USA         |
            | Spain       |
            | South_Korea |
            | Serbia      |
            | Romania     |
            | Qatar       |
            | Singapore   |
            | Portugal    |
            | Norway      |
            | Lithuania   |
            | Philippines |
            | Oman        |
            | New_Zealand |
            | Malaysia    |
            | Malta       |
            | Latvia      |
            | Italy       |
            | Kuwait      |
            | Indonesia   |
            | Hungary     |
            | Finland     |
            | Georgia     |
            | Cyprus      |
            | Estonia     |
            | Lebanon     |
            | Iceland     |
            | Luxembourg  |
            | France      |
