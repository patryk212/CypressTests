import { HomePage } from "../../pom/homePage.cy"

const homePage = new HomePage()

it('passes', () => {

    homePage.homePageUrl()
    homePage.clickSignUpLoginButton()
    homePage.loginToYourAccountIsVisible()
    homePage.loginEmail('test1@tests.com')
    homePage.loginPassword('123456')
    homePage.clickLoginButton()
    homePage.incorrectEmailOrPasswordIsVisible()
    
    

})