import { HomePage } from "../../pom/homePage.cy"
import {ProductsPage} from "../../pom/productsPage.cy"
import { CartPage } from "../../pom/cartPage.cy"


const homePage = new HomePage()
const productsPage= new ProductsPage()
const cartPage = new CartPage()



it('passes', () => {

    homePage.homePageUrl()
    homePage.hoverOverFirstProductAndClickAddToCartFromHomePage()
    homePage.viewCart()
    cartPage.verifyProductsInCart()
    cartPage.removeProductFromCart()
    cy.wait(5000)
    cartPage.verifyProductsInCart()
    

})