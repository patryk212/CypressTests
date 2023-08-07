import { HomePage } from "../../pom/homePage.cy"
import {ProductsPage} from "../../pom/productsPage.cy"

const homePage = new HomePage()
const productsPage = new ProductsPage()


it('passes', () => {

    homePage.homePageUrl()
    homePage.clickProductsButton()
    homePage.userIsNavigatedToPropertyPage("https://automationexercise.com/products")
    productsPage.productListsIsVisible()
    productsPage.clickOnTheViewFirstProduct()
    homePage.userIsNavigatedToPropertyPage("https://automationexercise.com/product_details/1")
    productsPage.productAvailabilityVisible()
    productsPage.productBrandVisible()
    productsPage.productCategoryVisible()
    productsPage.productConditionVisible()
    productsPage.productPriceVisible()
    productsPage.productNameVisible()
    
    

})