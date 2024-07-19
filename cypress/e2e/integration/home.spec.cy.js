const elements = require("../../support/elements")
const users = require("../../fixtures/user_of_page")

describe('Home tests', () => {
  beforeEach(() => {
    cy.login_page()
    cy.login(users.standard.username, users.standard.password)
  })
  it('should list all six items correctly', () => {
    cy.get(elements.inventory_itens).should('have.length', 6);
  });

  it('should sort items alphabetically from A to Z', () => {
    cy.ordenar_por('Name (A to Z)');
    cy.get(elements.first_inventory_item).first().find(elements.generic_name_item)
    .should('contain.text', "Sauce Labs Backpack");
  });

  it('should sort items alphabetically from Z to A', () => {
    cy.ordenar_por('Name (Z to A)');
    cy.get(elements.first_inventory_item).first().find(elements.generic_name_item)
    .should('contain.text', "Test.allTheThings() T-Shirt (Red)");
  });

  it('should sort items by price in ascending order', () => {
      cy.ordenar_por('Price (low to high)');
      cy.get(elements.first_inventory_item).first().find(elements.generic_name_item)
      .should('contain.text', 'Sauce Labs Onesie');
  });

  it('should sort items by price in descending order', () => {
      cy.ordenar_por('Price (high to low)');
      cy.get(elements.first_inventory_item).first().find(elements.generic_name_item)
      .should('contain.text', 'Sauce Labs Fleece Jacket');
  });

  it('should add an item to the cart when "ADD to Cart" is clicked', () => {
      cy.add_to_cart("Sauce Labs Backpack")
      cy.add_to_cart("Sauce Labs Fleece Jacket")
      cy.get(elements.element_on_cart).should('be.visible')
      .and('contain.text', "2")
  });

  it('should remove an item from the cart when "Remove" is clicked', () => {
      cy.add_to_cart("Sauce Labs Backpack")
      cy.add_to_cart("Sauce Labs Fleece Jacket")
      cy.remove_from_cart("Sauce Labs Backpack")
      cy.remove_from_cart("Sauce Labs Fleece Jacket")
      cy.get(elements.element_on_cart).should('not.exist')
  });

  it('should redirect to the item page when an item is clicked', () => {
      cy.get(elements.inventory_item_name("Sauce Labs Backpack")).click()
      cy.url().should('include', '/inventory-item.html');
  });

  it('should rest all cart item before click rest state', () => {
    cy.add_to_cart("Sauce Labs Backpack")
    cy.add_to_cart("Sauce Labs Fleece Jacket")
    cy.get(elements.hamburguer_button).should('be.visible').click()
    cy.get(elements.rest_app_button).click()
    cy.get(elements.close_hamburguer_btn).click()
    cy.get(elements.element_on_cart).should('not.exist')
  });
})