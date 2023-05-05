class OrdersPage {
	//Web elements locators
	emptyStateMsg = ".container .ng-star-inserted"

	//Get web elements with locators
	getEmptyStateMsg() {
		return cy.get(this.emptyStateMsg)
	}
}

export default OrdersPage
