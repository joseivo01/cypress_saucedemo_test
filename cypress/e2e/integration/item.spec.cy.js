const elements = require("../../support/elements")
const users = require("../../fixtures/user_of_page")
const utils = require("../../support/utils")

describe('Item tests', () => {
    beforeEach(() => {
        cy.login_page()
        cy.login(users.standard.username, users.standard.password)
    });
    
    it('should clicking item redirect to inside item page', () => {     
        cy.get(elements.inventory_item_name("Sauce Labs Backpack")).click()
        cy.url().should('include', 'inventory-item.html?id=4');
    });

    it('should item name is same inside item page', () => {     
        cy.get(elements.inventory_item_name("Sauce Labs Backpack")).click()
        cy.get(elements.item_name).should('contain.text', "Sauce Labs Backpack")
    });
    
    it('should display "Remove" button after adding item to cart from item page', () => {
        cy.add_to_cart("Sauce Labs Backpack")

        cy.get(elements.inventory_item_name("Sauce Labs Backpack")).click()
        cy.get(elements.remove_item_to_cart).should('be.visible')
        .and('contain.text', 'REMOVE')
    });

    it('should navigate back to homepage when "Back" button is clicked on item page', () => {
        cy.get(elements.inventory_item_name("Sauce Labs Backpack")).click()
        cy.url().should('include', '/inventory-item.html?id');

        cy.get(elements.back_button).click({force:true}); // is covered by other element
        cy.url().should('include', '/inventory.html');
    });
  
    it('should mark item as added to cart when added from item page and returning to homepage', () => {
        cy.get(elements.inventory_item_name("Sauce Labs Backpack")).click()

        cy.get(elements.add_item_to_cart).click()
        cy.get(elements.hamburguer_button).click()
        cy.get(elements.home_all_item_button).click()
        
        cy.get(elements.inventory_item_name("Sauce Labs Backpack"))
        .parents(elements.inventory_itens)
        .find(elements.remove_cart_home_page_button)
        .should('contain.text', 'REMOVE');
    });
})