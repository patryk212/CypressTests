export class RegistrationPage{


    accountInformationIsVisible(){
        cy.get(':nth-child(1) > b').should('be.visible')
        cy.get(':nth-child(1) > b').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }

    titleMan(){
        cy.get('#id_gender1').click()

    }
    titleWomen(){
        cy.get('#id_gender2').click()
    }
    enterPassword(password){
        cy.get('[data-qa="password"]').type(password)
    }
    dayOfBirth(dayOfBirth){
        cy.get('[data-qa="days"]').select(dayOfBirth)

    }
    monthOfBirth(monthOfBirth){
        cy.get('[data-qa="months"]').select(monthOfBirth)

    }
    yearOfBirth(yearOfBirth){
        cy.get('[data-qa="years"]').select(yearOfBirth)


    }
    checkboxSignUpForOurNewsletter(){
        cy.get('#newsletter').click()

    }
    checkboxReceiveSpecialOffersFromOurPartners(){
        cy.get('#optin').click()

    }
    firstName(firstName){
        cy.get('[data-qa="first_name"]').type(firstName)

    }
    lastName(lastName){
        cy.get('[data-qa="last_name"]').type(lastName)

    }
    companyName(companyName){
        cy.get('[data-qa="company"]').type(companyName)

    }
    address(address){
        cy.get('[data-qa="address"]').type(address)

    }
    address2(address2){
        cy.get('[data-qa="address2"]').type(address2)

    }
    countryName(){
        cy.get('[data-qa="country"]').select("India")

    }
    stateName(stateName){
        cy.get('[data-qa="state"]').type(stateName)

    }
    cityName(cityName){
        cy.get('[data-qa="city"]').type(cityName)

    }
    zipCode(zipCode){
        cy.get('[data-qa="zipcode"]').type(zipCode)

    }
    mobileNumber(mobileNumber){
        cy.get('[data-qa="mobile_number"]').type(mobileNumber)

    }
    clickCreateAccountButton(){
        cy.get('[data-qa="create-account"]').click()

    }
    clickContinoueButton(){
        cy.get('[data-qa="continue-button"]').click()
    }
    clickContinoueButtonAfterDeleteAccount(){
        cy.get('[data-qa="continue-button"]').click()
    }
    createAccountIsVisible(){
        cy.get('b').should('be.visible')
        cy.get('b').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }

}

