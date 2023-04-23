import LoginPage from "../pages/LoginPage"
import DashboardPage from "../pages/DashboardPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

context("Login", () => {
	it("Login successfully", () => {
		loginPage.visitLogin()

		loginPage.typeEmail("adeyeyeolushola977@gmail.com")

		loginPage.typePassword("Password2000!")

		loginPage.clickLogin()

		dashboardPage.getLoginToastMsg().should("be.visible")

		dashboardPage.getNavbarLinks().should("have.length", 4)
	})
})
