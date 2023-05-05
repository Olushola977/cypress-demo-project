import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import HeaderPage from "../../integration/pages/HeaderPage"
import OrdersPage from "../../integration/pages/OrdersPage"
import { expect } from "chai"

const headerPage = new HeaderPage()
const ordersPage = new OrdersPage()

Given("I am logged in to my dashboard", () => {
	cy.login("adeyeyeolushola977@gmail.com", "Password2000!")
})

And("I click on the order link", () => {
	cy.intercept(
		"GET",
		"/api/ecom/order/get-orders-for-customer/63eb6b28568c3e9fb1158bf5",
		{
			data: [],
			message: "No Orders",
		}
	).as("ordersURL")
	// cy.wait(3000)
	headerPage.clickLink("ORDERS")
})

Then(
	"I validate empty state of the order page given there are no orders",
	() => {
		// cy.wait(4000)
		cy.wait("@ordersURL").then(({ request, response }) => {
			expect(response.statusCode).to.equal(200)
			console.log(response.body)
		})
		ordersPage
			.getEmptyStateMsg()
			.should("contain", "You have No Orders to show at this time.")
	}
)
