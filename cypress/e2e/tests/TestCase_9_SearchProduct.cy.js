import { HomePage } from "../../pom/homePage.cy"
import {ProductsPage} from "../../pom/productsPage.cy"

const homePage = new HomePage()
const productsPage = new ProductsPage()


it('passes', () => {

    homePage.homePageUrl()
    homePage.clickProductsButton()
    homePage.userIsNavigatedToPropertyPage("https://automationexercise.com/products")
    productsPage.searchInputAndClickSearchButton("Polo")
    productsPage.searchedProductTitleIsVisible()
    productsPage.searchedProductAreVisibles()

    
    

})