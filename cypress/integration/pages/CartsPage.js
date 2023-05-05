class CartsPage {
	//Web elements locators
	emptyStateMsg = ".wrap .ng-star-inserted"
	cartProducts = ".cart .cartWrap li"

	//Get web elements with locators
	getEmptyStateMsg() {
		return cy.get(this.emptyStateMsg)
	}
	goBackToShopping() {
		return cy.visit("/client")
	}
	getCartProducts() {
		return cy.get(this.cartProducts)
	}
}

export default CartsPage
