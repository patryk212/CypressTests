import { HomePage } from "../../pom/homePage.cy"
import {ProductsPage} from "../../pom/productsPage.cy"
import { CartPage } from "../../pom/cartPage.cy"


const homePage = new HomePage()
const productsPage= new ProductsPage()
const cartPage = new CartPage()



it('passes', () => {

    homePage.homePageUrl()
    homePage.clickProductsButton()
    homePage.userIsNavigatedToPropertyPage("https://automationexercise.com/products")
    productsPage.searchInputAndClickSearchButton("Polo")
    productsPage.searchedProductTitleIsVisible()
    productsPage.searchedProductAreVisibles()
    productsPage.hoverOverFirstProductAndClickAddToCart()
    homePage.viewCart()
    cartPage.verifyProductsInCart()
    homePage.clickSignUpLoginButton()
    homePage.loginEmail("test1@tests.com")
    homePage.loginPassword("12345")
    homePage.clickLoginButton()
    homePage.clickCartButton()
    cartPage.verifyProductsInCart()

  
    

    

})