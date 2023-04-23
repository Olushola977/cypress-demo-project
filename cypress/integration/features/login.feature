@login
Feature: Login
 Scenario: Login successfully
  Given I open Login Page
  When I fill the email input with "adeyeyeolushola977@gmail.com"
  And I fill the password input with "Password2000!"
  And I click on Login button
  Then I validate successful login