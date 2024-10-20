Feature: User Login

  As a user, I should be able to log in with my credentials and access the home page or receive an error message for invalid attempts.

  # Test cases for AC1: Valid login attempt (successful and unsuccessful)
  Scenario: Login attempt with various valid and invalid combinations
    Given the user is on the login page
    When the user enters username "<username>" and password "<password>"
    And the user clicks the login button
    Then the user should be redirected to the home page if credentials are "<status>"


  # Test cases for AC2: Invalid login attempt with error message
  Scenario: Invalid login attempt displays error message
    Given the user is on the login page
    When the user enters username "<username>" and password "<password>"
    And the user clicks the login button
    Then an error message "Incorrect username or password." should be displayed



