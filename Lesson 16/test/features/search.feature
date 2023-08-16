Feature: User is able to search for query

Background: 
    Given I navigate to https://playwright.dev

Scenario Outline:
    When I search for <Query> in Searchbar
    When I click on №1 search result
    Then I expect h1 element text to equal <Result>

    Examples:
    | Query       | Result        | 
    | Annotations | Annotations   | 
    | Emulation   | Emulation     | 
    | Tests       | Writing tests | 