import LoginPage from "../pages/login_page";

const elements = require("../support/elements")


class HomePage extends LoginPage{
    itens_on_inventory(){
        return cy.get(elements.inventory_itens)
    }

    visit(username, password){
        super.visit()
        super.enter_username(username)
        super.enter_password(password)
        super.submit()
    }

    add_item_to_cart(itemName) {
        cy.add_to_cart(itemName)
    }
  
    remove_item_from_cart(itemName) {
        cy.remove_from_cart(itemName)
    }
  
    sort_items(option) {
        cy.order_items_for(option)
    }
    
    select_item(item_name) {
      return cy.get(elements.inventory_item_name(item_name))
    }
    
    item_on_cart(){
        return cy.get(elements.element_on_cart)
    }

    access_home_page(){
        cy.get(elements.hamburguer_button).should('be.visible').click()
        cy.get(elements.home_all_item_button).should('be.visible').click()
    }

    reset_all_item_on_cart(){
        cy.get(elements.hamburguer_button).should('be.visible').click()
        cy.get(elements.rest_app_button).click()
        cy.get(elements.close_hamburguer_btn).click()
    }
    
    go_to_cart() {
      cy.get(elements.my_cart_button).should('be.visible').click();
    }
  }
  
  export default HomePage;
  