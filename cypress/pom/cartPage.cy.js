export class CartPage{

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
   
    continoueShopping(){
        cy.get('.modal-footer > .btn').click()
    }
    viewCart(){
        cy.get('u').click()
    }
    
    verifyProductsInCart(){
        cy.get('#cart_info').should('be.visible')
        cy.get('#cart_info').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    setQuantityOfProduct(){
        cy.get('#quantity').clear()
        cy.get('#quantity').type('4')
    }
    
    proceedToCheckout(){
        cy.get('.col-sm-6 > .btn').click()
    }
    clickRegisterLoginCartPage(){
        cy.get('.modal-body > :nth-child(2) > a > u').click()
    }
    verifyAddressDetails(){
        cy.get('#address_delivery').should('be.visible')
        cy.get('#address_delivery').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    enterDescription(enterDescription){
        cy.get('.form-control').type(enterDescription)
    }
    placeOrder(){
        cy.get(':nth-child(7) > .btn').click()
    }
    nameOnCard(nameOnCard){
        cy.get('[data-qa="name-on-card"]').type(nameOnCard)
    }
    cardNumber(cardNumber){
        cy.get('[data-qa="card-number"]').type(cardNumber)
    }
    cvcNumber(cvcNumber){
        cy.get('[data-qa="cvc"]').type(cvcNumber)
    }
    monthExpiration(monthExpiration){
        cy.get('[data-qa="expiry-month"]').type(monthExpiration)
    }
    yearExpiration(yearExpiration){
        cy.get('[data-qa="expiry-year"]').type(yearExpiration)
    }
    payAndConfirmButton(){
        cy.get('[data-qa="pay-button"]').click()
    }
    successMessageAfterPayAndConfirm(){
        cy.get('#success_message > .alert-success').should('be.visible')
        cy.get('#success_message > .alert-success').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    removeProductFromCart(){
        cy.get('.cart_quantity_delete > .fa').click()
        
    }
    

 
    
}