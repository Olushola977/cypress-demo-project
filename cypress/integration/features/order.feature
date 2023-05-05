@order
Feature: Order
Scenario: Empty Order Page (no orders available)
  Given I am logged in to my dashboard
  And I click on the order link
  Then I validate empty state of the order page given there are no orders

# Scenario: Login unsuccessful (with incorrect email)
#     Given I open Login Page
#     When I fill the email input with "adeyeyeolushola977+wrong.com"
#     And I fill the password input with "Password2000!"
#     And I click on Login button
#     Then I validate error message

# Scenario: Login unsuccessful (with wrong password)
#     Given I open Login Page
#     When I fill the email input with "adeyeyeolushola977@gmail.com"
#     And I fill the password input with "Password2000@"
#     And I click on Login button
#     Then I validate unsuccessful login

# Scenario: Login successfully (with valid details)
#   Given I open Login Page
#   When I fill the email input with "adeyeyeolushola977@gmail.com"
#   And I fill the password input with "Password2000!"
#   And I click on Login button
#   Then I validate successful login