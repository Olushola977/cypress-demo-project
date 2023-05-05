import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../integration/pages/LoginPage"
import DashboardPage from "../../integration/pages/DashboardPage"
import HeaderPage from "../../integration/pages/HeaderPage"
import ToastMsg from "../../integration/pages/ToastMsg"
import { expect } from "chai"

const loginPage = new LoginPage()
const headerPage = new HeaderPage()
const dashboardPage = new DashboardPage()
const toastMsg = new ToastMsg()

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

Then("I validate unsuccessful login", () => {
	toastMsg
		.getToastMsg()
		.invoke("text")
		.then((text) => {
			const toastText = text
			expect(toastText).to.contain("Incorrect email or password.")
		})
})

Then("I validate error message", () => {
	loginPage.getErrorMsg().should("contain", "Enter Valid Email")
})

Then("I validate successful login", () => {
	dashboardPage
		.getToastMsg()
		.invoke("text")
		.then((text) => {
			const toastText = text
			expect(toastText).to.contain("Login Successfully")
		})

	headerPage.getNavbarLinks().should("have.length", 3)
})
