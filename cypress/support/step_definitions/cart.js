import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import HeaderPage from "../../integration/pages/HeaderPage"
import DashboardPage from "../../integration/pages/DashboardPage"
import CartsPage from "../../integration/pages/CartsPage"
import { expect } from "chai"

const headerPage = new HeaderPage()
const dashboardPage = new DashboardPage()
const cartsPage = new CartsPage()

Given("I am logged in to my dashboard", () => {
	cy.login("adeyeyeolushola977@gmail.com", "Password2000!")
})

And("I click on the cart link", () => {
	cy.intercept(
		"GET",
		"/api/ecom/user/get-cart-products/63eb6b28568c3e9fb1158bf5",
		{
			data: [],
			message: "No Product in Cart",
		}
	).as("cartProductsURL")
	// cy.wait(3000)
	headerPage.clickLink("Cart")
})

Then(
	"I validate empty state of the cart page given there are no products in cart",
	() => {
		// cy.wait(4000)
		cy.wait("@cartProductsURL").then(({ request, response }) => {
			expect(response.statusCode).to.equal(200)
			console.log(response.body)
		})
		cartsPage.getEmptyStateMsg().should("contain", "No Products in Your Cart !")
	}
)

Given("I am on the home page", () => {
	cy.login("adeyeyeolushola977@gmail.com", "Password2000!")
})

And("I add a product to cart", () => {
	dashboardPage.addProductToCart("zara coat")
})

Then("I validate the product is displayed in the Cart", () => {
	headerPage.clickLink("Cart")
	let cartProducts = cartsPage.getCartProducts()
	cartProducts.each(($el, index, list) => {
		const productTitle = $el.find(".infoWrap .cartSection h3")
		cy.wrap(productTitle.text()).should("contain", "zara coat")
	})
})
