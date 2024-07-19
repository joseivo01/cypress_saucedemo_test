const elements = require("../support/elements")
import HomePage from "../pages/home_page";


class InventoryPage extends HomePage{
    add_item() {
        cy.get(elements.add_item_to_cart).should('be.visible').click()
    }

    remove_item_from_cart() {
        cy.get(elements.remove_item_to_cart).should('be.visible')
        .and('contain.text', 'REMOVE').click()
    }  

    item_title_check(item_name){
        cy.get(elements.item_name).should('be.visible').and('contain.text', item_name)
    }

    back_button(){
        cy.get(elements.back_button).should('be.visible').click({force:true})
    }

    goToCart() {
        cy.get('.shopping_cart_link').click();
    }
}

export default InventoryPage;
  