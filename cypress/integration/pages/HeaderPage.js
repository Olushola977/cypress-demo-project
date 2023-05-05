class HeaderPage {
	//Web elements locators
	navbarLinks = "nav ul li button"

	//Get web elements with locators
	getNavbarLinks() {
		return cy.get(this.navbarLinks)
	}

	//interact with page
	clickLink(link) {
		cy.get(this.navbarLinks).each(($el, index, $list) => {
			if ($el.text().includes(link)) {
				cy.wrap($el).click()
			}
		})
	}
}

export default HeaderPage
