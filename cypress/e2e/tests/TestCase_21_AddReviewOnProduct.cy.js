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
    productsPage.clickOnTheViewFirstProduct()
    productsPage.writeYourReviewVisible()
    productsPage.nameReview('asdas')
    productsPage.emailReview('asdasd@adssad.com')
    productsPage.writeReview('asdasdas')
    productsPage.submitReviewButton()
    productsPage.reviewSuccessMessage()

  
    

    

})