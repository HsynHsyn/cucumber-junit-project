@hakan
Feature: CRM logout functionality
  Agile Story: As a user, I should be able to log out.
  Accounts are: librarian, student, admin

  Background: For all scenarios user is on CRM24 page of the library application
    Given user logs in with valid credentials


  Scenario: user logs out successfully
    When  user navigates to their profile photo
    And   clicks on the profile photo
    Then  user clicks on the Log out button
    And   user should be redirected to the login page

  Scenario: user sees five options under the profile name
    When  user navigates to their profile photo
    And   clicks on the profile photo
    Then  user should see exactly five options under the profile name

  Scenario: user logs out and cannot go to home page by clicking browser's back button
    When  user navigates to their profile photo
    And   clicks on the profile photo
    Then  user clicks on the Log out button
    And   user should be redirected to the login page
    When  user clicks the browser's back button
    Then  user should still be on the login page




