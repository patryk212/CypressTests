import { HomePage } from "../../pom/homePage.cy"
import { RegistrationPage } from "../../pom/registrationPage.cy"

const homePage = new HomePage()
const registrationPage = new RegistrationPage()

    it('passes', () => {
      
      homePage.homePageUrl()
      homePage.clickSignUpLoginButton()
      homePage.registrationEmail("asdasd@adsssad.com")
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
      homePage.clickDeleteAccountButton()
      homePage.deleteAccountIsVisible()
      registrationPage.clickContinoueButtonAfterDeleteAccount()
      
      
      



      
    })
  