class LoginPage {
	path = "/client"

	//Web elements locators
	emailInput = "input[id='userEmail']"

	passwordInput = "input[id='userPassword']"

	loginButton = "input[id='login']"

	errorMsg = ".invalid-feedback div"

	//Get web elements with locators
	getEmailField() {
		return cy.get(this.emailInput)
	}
	getPasswordField() {
		return cy.get(this.passwordInput)
	}
	getLoginBtn() {
		return cy.get(this.loginButton)
	}
	getErrorMsg() {
		return cy.get(this.errorMsg)
	}

	//Interact with the web elements
	visitLogin() {
		cy.visit(this.path)
	}

	typeEmail(email) {
		cy.get(this.emailInput).type(email)
	}

	typePassword(password) {
		cy.get(this.passwordInput).type(password)
	}

	clickLogin() {
		cy.get(this.loginButton).click()
	}
}

export default LoginPage
