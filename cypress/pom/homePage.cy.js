export class HomePage{

    homePageUrl(){
        cy.visit('https://automationexercise.com/')
    }
    clickSignUpLoginButton(){
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    }
    newUserSignupIsVisible(){
      cy.get('.signup-form > h2').should('be.visible')
      cy.get('.signup-form > h2').then(($element) => {
      const text = $element.text()
      cy.log(text)
      })
    }
    registrationName(registrationName){
        cy.get('[data-qa="signup-name"]').type(registrationName)
    }
    registrationEmail(registrationEmail){
        cy.get('[data-qa="signup-email"]').type(registrationEmail)
    }
    clickSignupButton(){
        cy.get('[data-qa="signup-button"]').click()
    }
    clickDeleteAccountButton(){
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    }
    deleteAccountIsVisible(){
        cy.get('b').should('be.visible')
        cy.get('b').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    loggedAsIsVisible(){
        cy.get(':nth-child(10) > a').should('be.visible')
        cy.get(':nth-child(10) > a').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    loginToYourAccountIsVisible(){
        cy.get('.login-form > h2').should('be.visible')
        cy.get('.login-form > h2').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    } 
    loginEmail(loginEmail){
        cy.get('[data-qa="login-email"]').type(loginEmail)
    }
    loginPassword(loginPassword){
        cy.get('[data-qa="login-password"]').type(loginPassword)

    }
    clickLoginButton(){
        cy.get('[data-qa="login-button"]').click()
    }
    incorrectEmailOrPasswordIsVisible(){
        cy.get('.login-form > form > p').should('be.visible')
        cy.get('.login-form > form > p').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    clickLogoutButton(){
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    }
    userIsNavigatedToPropertyPage(enterUrl){
        cy.url().should('eq', enterUrl)
        cy.url().then((url) => {
            cy.log('Bieżący URL:', url);
        });
    }
    emailAddressIsAlreadyExists(){
        cy.get('.signup-form > form > p').should('be.visible')
        cy.get('.signup-form > form > p').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    contactUsButton(){
        cy.get('.shop-menu > .nav > :nth-child(8) > a').click()
    }
    clickOnTestCaseButton(){
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    }
    clickProductsButton(){
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    }
    scrollDownToTheFooter(){
        cy.get('#footer').scrollIntoView()
    }
    verifyTextSubscription(){
        cy.get('.single-widget > h2').should('have.text','Subscription')
    }
    subscriptionEmailFieldAndClickButton(email){
        cy.get('#susbscribe_email').type(email)
        cy.get('#subscribe > .fa').click()
    }
    verifySuccessMessageAfterSubsribeIsVisible(){
        cy.get('.alert-success').should('be.visible')
        cy.get('.alert-success').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    clickCartButton(){
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    }
    hoverOverSecondProductAndClickAddToCartFromHomePage(){
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    }
   
    hoverOverFirstProductAndClickAddToCartFromHomePage(){
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    }
    categoryProductsVisibles(){
        cy.get('#accordian').should('be.visible')
        cy.get('#accordian').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    clickOnWomenCategory(){
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click()
    }
    clickOnDressCategory(){
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
    }
    titleWomenDressIsVisible(){
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').should('be.visible')
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    clickOnManCategory(){
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click()
    }
    clickOnManTshirtCategory(){
        cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click()
    }
    recommendedItemsVisibles(){
        cy.get('.recommended_items').should('be.visible')
        cy.get('.recommended_items').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    addToCardRecommendProduct(){
        cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    }
    clickArrowOnBottomPage(){
        cy.get('#scrollUp > .fa').click()
    }
    fullFledgedPracticeTextVisible(){
        cy.get('.active > :nth-child(1) > h2').should('be.visible')
        cy.get('.active > :nth-child(1) > h2').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    viewCart(){
        cy.get('u').click()
    }
    scrollUp(){
        cy.get('.logo > a > img').scrollIntoView()
    }

}



