import { HomePage } from "../../pom/homePage.cy"
import { CartPage } from "../../pom/cartPage.cy"


const homePage = new HomePage()
const cartPage = new CartPage()


it('passes', () => {

    homePage.homePageUrl()
    homePage.clickCartButton()
    cartPage.scrollDownToTheFooter()
    cartPage.verifyTextSubscription()
    cartPage.subscriptionEmailFieldAndClickButton("asdasd@dsad.com")
    cartPage.verifySuccessMessageAfterSubsribeIsVisible()
    
    

})