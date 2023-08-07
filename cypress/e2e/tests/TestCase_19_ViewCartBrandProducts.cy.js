import { HomePage } from "../../pom/homePage.cy"
import {ProductsPage} from "../../pom/productsPage.cy"
import { CartPage } from "../../pom/cartPage.cy"


const homePage = new HomePage()
const productsPage= new ProductsPage()
const cartPage = new CartPage()



it('passes', () => {

    homePage.homePageUrl()
    homePage.clickProductsButton()
    productsPage.productBrandVisible()
    productsPage.clickOnPoloBrand()
    homePage.userIsNavigatedToPropertyPage("https://automationexercise.com/brand_products/Polo")
    productsPage.clickOnHmBrand()
    homePage.userIsNavigatedToPropertyPage("https://automationexercise.com/brand_products/H&M")
    

    

})