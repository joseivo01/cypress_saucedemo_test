const users = require("../../fixtures/user_of_page")
const itemPage = require("../../pages/item_page")

const item_page = new itemPage

describe('Item tests', () => {
    beforeEach(() => {
        item_page.visit(users.standard.username, users.standard.password)
    });
    
    it('should clicking item redirect to inside item page', () => {     
        item_page.select_item("Sauce Labs Backpack").click()
        item_page.valid_url_is_correct('inventory-item.html?id=4');
    });

    it('should item name is same inside item page', () => {     
        item_page.select_item("Sauce Labs Backpack").click()
        item_page.item_title_check("Sauce Labs Backpack")
    });
    
    it('should display "Remove" button after adding item to cart from item page', () => {
        item_page.add_item_to_cart("Sauce Labs Backpack")
        item_page.select_item("Sauce Labs Backpack").click()
        item_page.remove_item_from_cart()
    });

    it('should navigate back to homepage when "Back" button is clicked on item page', () => {
        item_page.select_item("Sauce Labs Backpack").click()
        item_page.valid_url_is_correct('/inventory-item.html?id');
        item_page.back_button()
        item_page.valid_url_is_correct('/inventory.html');
    });
  
    it('should mark item as added to cart when added from item page and returning to homepage', () => {
        item_page.select_item("Sauce Labs Backpack").click()

        item_page.add_item()
        item_page.access_home_page()
        
        item_page.item_on_cart().should('contain.text', '1')
    });
})