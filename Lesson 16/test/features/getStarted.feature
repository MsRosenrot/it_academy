Feature: User is able to start learning abount Playwrite by clicking 'Get Started' button on the main page

  Background: 
    Given I navigate to https://playwright.dev

  Scenario: 
    Given I click on element a.getStarted_Sjon
    Then I expect h1 element text to equal Installation

