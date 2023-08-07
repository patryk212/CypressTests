import { HomePage } from "../../pom/homePage.cy"
import { ContactUs } from "../../pom/contactUs.cy"


const homePage = new HomePage()
const contactUs = new ContactUs()

it('passes', () => {

    homePage.homePageUrl()
    homePage.contactUsButton()

    contactUs.getInTouchIsVisible()
    contactUs.name("john")
    contactUs.email("john@john.com")
    contactUs.subject("help")
    contactUs.message("Just kidding")
    contactUs.clickSubmitButton()
    contactUs.yourDetailsHaveBeenSubmittedDuccessfullyIsVisible()
    contactUs.clickHomeButton()
    homePage.userIsNavigatedToPropertyPage("https://automationexercise.com/")
    
    

})