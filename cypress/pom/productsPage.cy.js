export class ProductsPage{

    productListsIsVisible(){
        cy.get('.brands_products').should('be.visible')
        cy.get('.brands_products').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    clickOnTheViewFirstProduct(){
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
    }
    productNameVisible(){
        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information > h2').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }


    continoueShopping(){
        cy.get('.modal-footer > .btn').click()
    }

    cartButton(){
        cy.get('u').click()
    }

    productCategoryVisible(){
        cy.get('.product-information > :nth-child(3)').should('be.visible')
        cy.get('.product-information > :nth-child(3)').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    

    }
    productPriceVisible(){
        cy.get(':nth-child(5) > span').should('be.visible')
        cy.get(':nth-child(5) > span').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
        
    }
    productAvailabilityVisible(){
        cy.get('.product-information > :nth-child(6)').should('be.visible')
        cy.get('.product-information > :nth-child(6)').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    
        
    }
    productConditionVisible(){
        cy.get('.product-information > :nth-child(7)').should('be.visible')
        cy.get('.product-information > :nth-child(7)').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    
    }
    productBrandVisible(){
        cy.get('.brands_products').should('be.visible')
        cy.get('.brands_products').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
        
    }
    searchInputAndClickSearchButton(product){
        cy.get('#search_product').type(product)
        cy.get('#submit_search').click()
    }
    searchedProductTitleIsVisible(){
        cy.get('#submit_search').should('be.visible')
        cy.get('#submit_search').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    searchedProductAreVisibles(){
        cy.get('.features_items').should('be.visible')
        cy.get('.features_items').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    hoverOverSecondProductAndClickAddToCart(){
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    }
    addProductToCartFromProductPage(){
        cy.get(':nth-child(5) > .btn').click()
    }
    hoverOverFirstProductAndClickAddToCart(){
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    }
    clickOnPoloBrand(){
        cy.get('.brands-name > .nav > :nth-child(1) > a').click()
    }
    clickOnHmBrand(){
        cy.get('.brands-name > .nav > :nth-child(2) > a').click()
    }
    writeYourReviewVisible(){
        cy.get('.active > a').should('be.visible')
        cy.get('.active > a').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }
    nameReview(name){
        cy.get('#name').type(name)
    }
    emailReview(email){
        cy.get('#email').type(email)
    }
    writeReview(review){
        cy.get('#review').type(review)
    }
    submitReviewButton(){
        cy.get('#button-review').click()
    }
    reviewSuccessMessage(){
        cy.get('.alert-success > span').should('be.visible')
        cy.get('.alert-success > span').then(($element) => {
        const text = $element.text()
        cy.log(text)
        })
    }

}