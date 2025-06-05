
class Product{
    addToCart(){
       cy.get("#add-to-cart-sauce-labs-backpack").click();
       cy.get("#add-to-cart-sauce-labs-bike-light").click();
       cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
    }
    logout(){
        cy.get('#react-burger-menu-btn').click();
        cy.contains('Logout').click();
        
    }

    goToCart(){
        cy.get('.shopping_cart_link').click()
    }
}
export default Product