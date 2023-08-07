import { HomePage } from "../../pom/homePage.cy"

const homePage = new HomePage()


it('passes', () => {

    homePage.homePageUrl()
    homePage.clickOnTestCaseButton()
    homePage.userIsNavigatedToPropertyPage("https://automationexercise.com/test_cases")
    
    

})