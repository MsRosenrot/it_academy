Feature: User is able to set color theme and select all of Playwrite programming language docs

  Background: 
    Given I navigate to https://playwright.dev

  Scenario: 
    Given I click on element button.clean-btn.toggleButton_gllP
    Then I expect data-theme attribute of html element to equal light
    
  Scenario Outline:
    Given I hover on element div.dropdown--hoverable
    Then I expect elements of list ul.dropdown__menu a to contain element with inner text "<Text>"

    Examples:
    |Text    |
    |.NET    |
    |Node.js |
    |Python  |
    |Java    |



   



