import { HomePage } from "../../pom/homePage.cy"
import {ProductsPage} from "../../pom/productsPage.cy"
import { CartPage } from "../../pom/cartPage.cy"


const homePage = new HomePage()
const productsPage= new ProductsPage()
const cartPage = new CartPage()



it('passes', () => {

    homePage.homePageUrl()
    homePage.clickProductsButton()
    productsPage.clickOnTheViewFirstProduct()
    cartPage.setQuantityOfProduct()
    productsPage.addProductToCartFromProductPage()
    homePage.viewCart()
    cartPage.verifyProductsInCart()

})