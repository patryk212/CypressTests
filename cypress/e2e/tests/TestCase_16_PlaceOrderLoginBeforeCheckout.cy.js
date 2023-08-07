import { HomePage } from "../../pom/homePage.cy"
import {ProductsPage} from "../../pom/productsPage.cy"
import { CartPage } from "../../pom/cartPage.cy"


const homePage = new HomePage()
const productsPage= new ProductsPage()
const cartPage = new CartPage()

it('passes', () => {

    homePage.homePageUrl()
    homePage.clickSignUpLoginButton()
    homePage.loginEmail("test1@tests.com")
    homePage.loginPassword("12345")
    homePage.clickLoginButton()
    homePage.loggedAsIsVisible()
    homePage.hoverOverFirstProductAndClickAddToCartFromHomePage()
    homePage.hoverOverSecondProductAndClickAddToCartFromHomePage()
    cy.wait(5000)
    homePage.viewCart()
    cartPage.verifyProductsInCart()
    cartPage.proceedToCheckout()
    cartPage.verifyAddressDetails()
    cartPage.enterDescription("asdad")
    cartPage.placeOrder()
    cartPage.nameOnCard("asdad")
    cartPage.cardNumber("12312")
    cartPage.cvcNumber("123")
    cartPage.monthExpiration("12")
    cartPage.yearExpiration("2222")
    cartPage.payAndConfirmButton()
    
    


})