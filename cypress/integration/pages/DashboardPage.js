class DashboardPage {
	//Web elements locators
	navbarLinks = "nav ul li button"
	loginToast = "div #toast-container"

	//Get web elements with locators
	getNavbarLinks() {
		return cy.get(this.navbarLinks)
	}
	getLoginToastMsg() {
		return cy.get(this.loginToast)
	}
}

export default DashboardPage
