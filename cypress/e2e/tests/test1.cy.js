import { HomePage } from "../../pom/homePage.cy"
import { CartPage } from "../../pom/cartPage.cy"

const homePage = new HomePage
const cartPage = new CartPage

  it('passes', () => {

    cy.visit('https://automationexercise.com/products');
    

  })


