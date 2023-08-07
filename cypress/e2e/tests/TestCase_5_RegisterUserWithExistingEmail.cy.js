import { HomePage } from "../../pom/homePage.cy"

const homePage = new HomePage()

it('passes', () => {

    homePage.homePageUrl()
    homePage.clickSignUpLoginButton()
    homePage.newUserSignupIsVisible()
    homePage.registrationName('asdasd')
    homePage.registrationEmail('test1@tests.com')
    homePage.clickSignupButton()
    homePage.emailAddressIsAlreadyExists()
    

})