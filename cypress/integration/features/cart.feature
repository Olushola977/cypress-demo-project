@cart
Feature: Cart
# Scenario: Empty Cart Page (no products in the cart)
#   Given I am logged in to my dashboard
#   And I click on the cart link
#   Then I validate empty state of the cart page given there are no products in cart

Scenario: Cart with Products
    Given I am on the home page
    And I add a product to cart
    Then I validate the product is displayed in the Cart

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