import { HomePage } from "../../pom/homePage.cy"
import {ProductsPage} from "../../pom/productsPage.cy"
import { CartPage } from "../../pom/cartPage.cy"


const homePage = new HomePage()
const productsPage= new ProductsPage()
const cartPage = new CartPage()



it('passes', () => {

    homePage.homePageUrl()
    homePage.scrollDownToTheFooter()
    homePage.verifyTextSubscription()
    homePage.clickArrowOnBottomPage()
    homePage.fullFledgedPracticeTextVisible()

  
    

    

})