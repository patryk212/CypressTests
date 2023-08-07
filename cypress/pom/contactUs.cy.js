export class ContactUs{

    getInTouchIsVisible(){
        cy.get('div.contact-form > .title').should('be.visible')
        cy.get('div.contact-form > .title').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    name(name){
        cy.get('[data-qa="name"]').type(name)
    }
    email(email){
        cy.get('[data-qa="email"]').type(email)
    }
    subject(subject){
        cy.get('[data-qa="subject"]').type(subject)
    }
    message(message){
        cy.get('[data-qa="message"]').type(message)

    }
    clickSubmitButton(){
        cy.get('[data-qa="submit-button"]').click()
    }
    yourDetailsHaveBeenSubmittedDuccessfullyIsVisible(){
        cy.get('.status').should('be.visible')
        cy.get('.status').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    clickHomeButton(){
        cy.get('span').click()
    }
    
}