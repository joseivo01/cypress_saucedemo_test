const elements = require("../../support/elements")
const users = require("../../fixtures/user_of_page")
const HomePage = require("../../pages/home_page")

const home_page = new HomePage

describe('Home tests', () => {
  beforeEach(() => {
    home_page.visit(users.standard.username, users.standard.password)
  })

  it('should list all six items correctly', () => {
    home_page.itens_on_inventory()
    .should('have.length', 6);
  });

  it('should sort items alphabetically from A to Z', () => {
    cy.order_items_for('Name (A to Z)');
    cy.get(elements.first_inventory_item).first().find(elements.generic_name_item)
    .should('contain.text', "Sauce Labs Backpack");
  });

  it('should sort items alphabetically from Z to A', () => {
    home_page.sort_items('Name (Z to A)')
    home_page.itens_on_inventory().first()
    .find(elements.generic_name_item)
    .should('contain.text', "Test.allTheThings() T-Shirt (Red)");
  });

  it('should sort items by price in ascending order', () => {
    home_page.sort_items('Price (low to high)')
    home_page.itens_on_inventory()
    .first().find(elements.generic_name_item)
    .should('contain.text', 'Sauce Labs Onesie');
  });

  it('should sort items by price in descending order', () => {
    home_page.sort_items('Price (high to low)')
    home_page.itens_on_inventory()
    .first().find(elements.generic_name_item)
    .should('contain.text', 'Sauce Labs Fleece Jacket');
  });

  it('should add an item to the cart when "ADD to Cart" is clicked', () => {
    home_page.add_item_to_cart("Sauce Labs Backpack")
    home_page.add_item_to_cart("Sauce Labs Fleece Jacket")
    home_page.item_on_cart().should('contain.text', "2")
  });

  it('should remove an item from the cart when "Remove" is clicked', () => {
    home_page.add_item_to_cart("Sauce Labs Backpack")
    home_page.add_item_to_cart("Sauce Labs Fleece Jacket")
    home_page.remove_item_from_cart("Sauce Labs Backpack")
    home_page.remove_item_from_cart("Sauce Labs Fleece Jacket")
    home_page.item_on_cart().should('not.exist')
  });

  it('should redirect to the item page when an item is clicked', () => {
    home_page.select_item("Sauce Labs Backpack").click()
    home_page.valid_url_is_correct('/inventory-item.html');
  });

  it('should rest all cart item before click rest state', () => {
    home_page.add_item_to_cart("Sauce Labs Backpack")
    home_page.add_item_to_cart("Sauce Labs Fleece Jacket")
    home_page.reset_all_item_on_cart()
    home_page.item_on_cart().should('not.exist')
  });
})