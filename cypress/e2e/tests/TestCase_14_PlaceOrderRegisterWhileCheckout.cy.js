import { HomePage } from "../../pom/homePage.cy"
import {ProductsPage} from "../../pom/productsPage.cy"
import { CartPage } from "../../pom/cartPage.cy"
import { RegistrationPage } from "../../pom/registrationPage.cy"


const homePage = new HomePage()
const productsPage= new ProductsPage()
const cartPage = new CartPage()
const registrationPage = new RegistrationPage()



it('passes', () => {

    homePage.homePageUrl()
    homePage.hoverOverFirstProductAndClickAddToCartFromHomePage()
    homePage.hoverOverSecondProductAndClickAddToCartFromHomePage()
    cartPage.viewCart()
    homePage.userIsNavigatedToPropertyPage("https://automationexercise.com/view_cart")
    cartPage.proceedToCheckout()
    cartPage.clickRegisterLoginCartPage()
    homePage.registrationEmail("asdasd@adxxxsad.com")
    homePage.registrationName("john")
    homePage.clickSignupButton()
    registrationPage.accountInformationIsVisible()
    registrationPage.titleMan();
    registrationPage.enterPassword("12345")
    registrationPage.dayOfBirth("12")
    registrationPage.monthOfBirth("June")
    registrationPage.yearOfBirth("2000")
    registrationPage.checkboxSignUpForOurNewsletter()
    registrationPage.checkboxReceiveSpecialOffersFromOurPartners()
    registrationPage.firstName("John")
    registrationPage.lastName("John")
    registrationPage.companyName("Johns")
    registrationPage.address("ad1")
    registrationPage.address2("ad2")
    registrationPage.countryName()
    registrationPage.stateName("sdasd")
    registrationPage.cityName("Johnss")
    registrationPage.zipCode("2201")
    registrationPage.mobileNumber("2313123123123")
    registrationPage.clickCreateAccountButton()
    registrationPage.createAccountIsVisible()
    registrationPage.clickContinoueButton()
    homePage.loggedAsIsVisible()
    homePage.clickCartButton()
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
    homePage.clickDeleteAccountButton()
    homePage.deleteAccountIsVisible()

    

})