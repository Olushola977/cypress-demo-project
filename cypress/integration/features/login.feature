@login
Feature: Login
Scenario: Login unsuccessful (with wrong email)
  Given I open Login Page
  When I fill the email input with "adeyeyeolushola977+wrong@gmail.com"
  And I fill the password input with "Password2000!"
  And I click on Login button
  Then I validate unsuccessful login

Scenario: Login unsuccessful (with incorrect email)
    Given I open Login Page
    When I fill the email input with "adeyeyeolushola977+wrong.com"
    And I fill the password input with "Password2000!"
    And I click on Login button
    Then I validate error message

Scenario: Login unsuccessful (with wrong password)
    Given I open Login Page
    When I fill the email input with "adeyeyeolushola977@gmail.com"
    And I fill the password input with "Password2000@"
    And I click on Login button
    Then I validate unsuccessful login

Scenario: Login successfully (with valid details)
  Given I open Login Page
  When I fill the email input with "adeyeyeolushola977@gmail.com"
  And I fill the password input with "Password2000!"
  And I click on Login button
  Then I validate successful login