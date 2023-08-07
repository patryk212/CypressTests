import { HomePage } from "../../pom/homePage.cy"


const homePage = new HomePage()



it('passes', () => {

    homePage.homePageUrl()
    homePage.scrollDownToTheFooter()
    homePage.verifyTextSubscription()
    homePage.subscriptionEmailFieldAndClickButton("asdas@sadas.com")
    homePage.verifySuccessMessageAfterSubsribeIsVisible()
    
    
    

})