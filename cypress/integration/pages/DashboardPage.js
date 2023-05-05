class DashboardPage {
	//Web elements locators
	toastMsg = "#toast-container div div"
	productsDescricptionCard = ".row .card .card-body"

	//Get web elements with locators
	getToastMsg() {
		return cy.get(this.toastMsg)
	}
	addProductToCart(productName) {
		return cy.get(this.productsDescricptionCard).each(($el, index, $list) => {
			const name = $el.find("h5")
			if (name.text().includes(productName)) {
				const buttons = $el.find("button")
				buttons[1].click()
			}
		})
	}
}

export default DashboardPage
