@Wiki
Feature: Wiki search feature
  WPS-7531

  Scenario: Wikipedia Search Functionality Title Verification
    Given User is on Wikipedia home page
    When  User types "Steve Jobs" in the wiki search box
    And   User clicks wiki search button
    Then  User sees "Steve Jobs" is in the wiki title
  @Wiki
  Scenario: Wikipedia Search Functionality Header Verification
    Given User is on Wikipedia home page
    When User types "Steve Jobs" in the wiki search box
    And User clicks wiki search button
    Then User sees "Steve Jobs" is in the main header

