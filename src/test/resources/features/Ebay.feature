@Ebay
Feature: eBay User Journey
  Agile story: User should be able to login with correct credentials and search product

  Scenario Outline: User logins successfully and search product
    Given User is on eBay home page
    When  User logs in with "<username>" and "<password>"
    And   User searches for "<searchTerm>"
    And   User clicks the search button
    Then  User sees "<searchTerm>" in the search results
#primepickings.uk@gmail.com , password Hsyn2486.,=
    Examples:
      | username                   | password    | searchTerm   |
      | primepickings.uk@gmail.com | Hsyn2486.,= | Wooden Spoon |




