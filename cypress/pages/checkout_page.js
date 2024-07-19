const elements = require("../support/elements")
import HomePage from "../pages/home_page";


class CheckoutPage extends HomePage{
    visit(username, password){
        super.visit(username, password)
    }
    enter_first_name(first_name) {
        cy.get(elements.first_name_input).type(first_name)
    }

    enter_last_name(last_name) {
        cy.get(elements.last_name_input).type(last_name)
    }

    enter_postal_code(postal_code) {
        cy.get(elements.postal_code_input).type(postal_code)
    }

    select_item_in_checkout(item){
        return cy.get(elements.cart_item_name(item)).should('be.visible')
    }

    remove_item_from_checkout(item){
        cy.get(elements.cart_item_name(item))
        .parents(elements.card_item_generic)
        .find(elements.cart_item_remove_button).click();
    }
    checkout_button() {
        return cy.get(elements.checkout_button).should('be.visible').click()
    }
    
    continue_button(){
        return cy.get(elements.continue_check_button).should('be.visible').click()
    }

    finish_button() {
        return cy.get(elements.finish_button).should('be.visible').click()
    }

    cancel_button_your_information() {
        return cy.get(elements.cancel_check_button).should('be.visible').click()
    }

    cancel_button_overview() {
        return cy.get(elements.cancel_button).should('be.visible').click()
    }

    complete_message() {
        return cy.get(elements.complete_message).should('be.visible')
    }
}

export default CheckoutPage;
