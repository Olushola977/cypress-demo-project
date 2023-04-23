import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../integration/pages/LoginPage"
import DashboardPage from "../../integration/pages/DashboardPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

Given("I open Login Page", () => {
	loginPage.visitLogin()
})

When("I fill the email input with {string}", (email) => {
	loginPage.typeEmail(email)
})

When("I fill the password input with {string}", (password) => {
	loginPage.typePassword(password)
})

When("I click on Login button", () => {
	loginPage.clickLogin()
})

Then("I validate successful login", () => {
	dashboardPage.getLoginToastMsg().should("be.visible")

	dashboardPage.getNavbarLinks().should("have.length", 4)
})
