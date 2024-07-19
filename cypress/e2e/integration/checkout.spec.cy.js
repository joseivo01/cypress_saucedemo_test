const elements = require("../../support/elements")
const users = require("../../fixtures/user_of_page")
const utils = require("../../support/utils")

describe('Checkout Tests', () => {
  let first_name, last_name, postal_code;

  beforeEach(() => {
    cy.login_page()
    cy.login(users.standard.username, users.standard.password)
    cy.add_to_cart("Sauce Labs Backpack")
    cy.get(elements.my_cart_button).click()
    cy.url().should('include', '/cart.html');

    first_name = utils.generate_string('first_name');
    last_name = utils.generate_string('last_name');
    postal_code = utils.generate_string('582')
  });

  it('should remove item from cart and reflect changes when going back', () => {
    cy.get(elements.cart_item_name("Sauce Labs Backpack")).should('be.visible')
    cy.get(elements.cart_item_remove_button).click()
    cy.get(elements.cart_item_name("Sauce Labs Backpack")).should('not.exist')
  });

  it('should redirect to "Your Information" page when clicking "Checkout"', () => {
    cy.get(elements.checkout_button).should('be.visible').click()
    cy.get(elements.header_infor_text).should('contain.text', 'Checkout: Your Information')
    cy.url().should('include', '/checkout-step-one.html');
  });

  it('should return to "Your Cart" when canceling on "Your Information" page', () => {
    cy.get(elements.checkout_button).should('be.visible').click()
    cy.get(elements.header_infor_text).should('contain.text', 'Checkout: Your Information')
    cy.get(elements.cancel_check_button).click()
    cy.url().should('include', '/cart.html');
  });

  it('should redirect to item page when clicking on item during checkout', () => {
    cy.get(elements.cart_item_name("Sauce Labs Backpack")).should('be.visible').click()
    cy.url().should('include', '/inventory-item.html');
  });

  it('should return to "Your Cart" when clicking "Back" on item page during checkout', () => {
    cy.get(elements.cart_item_name("Sauce Labs Backpack")).should('be.visible').click()
    cy.url().should('include', '/inventory-item.html');
    cy.get(elements.back_button).should('be.visible').click({force:true})
    cy.url().should('include', '/cart.html')
  });

  it('should return to home page when canceling during checkout overview', () => {
    cy.get(elements.cart_item_name("Sauce Labs Backpack")).should('be.visible')
    cy.get(elements.checkout_button).should('be.visible').click()
    cy.fill_checkout_information_fields(first_name, last_name, postal_code)
    cy.get(elements.continue_check_button).click()
    cy.url().should('include', '/checkout-step-two.html');
    cy.get(elements.cancel_button).should('be.visible').click()
    cy.url().should('include', '/inventory.html');    
  });

  it('should not advance with "First Name" field in blank', () => {
    cy.get(elements.cart_item_name("Sauce Labs Backpack")).should('be.visible')
    cy.get(elements.checkout_button).should('be.visible').click()
    cy.get(elements.last_name_input).type(last_name)
    cy.get(elements.postal_code_input).type(postal_code)
    cy.get(elements.continue_check_button).click()
    cy.get(elements.error_message).should('contain.text', 'Error: First Name is required')
  });

  it('should not advance with "Last Name" field in blank', () => {
    cy.get(elements.cart_item_name("Sauce Labs Backpack")).should('be.visible')
    cy.get(elements.checkout_button).should('be.visible').click()
    cy.get(elements.first_name_input).type(first_name)
    cy.get(elements.postal_code_input).type(postal_code)
    cy.get(elements.continue_check_button).click()
    cy.get(elements.error_message).should('contain.text', 'Error: Last Name is required')
  });

  it('should not advance with "Zip/Postal Code" field in blank', () => {
    cy.get(elements.cart_item_name("Sauce Labs Backpack")).should('be.visible')
    cy.get(elements.checkout_button).should('be.visible').click()
    cy.get(elements.first_name_input).type(first_name)
    cy.get(elements.last_name_input).type(last_name)
    cy.get(elements.continue_check_button).click()
    cy.get(elements.error_message).should('contain.text', 'Error: Postal Code is required')
  });

  it('should can finished a buy a item', () => {
    cy.get(elements.cart_item_name("Sauce Labs Backpack")).should('be.visible')
    cy.get(elements.checkout_button).should('be.visible').click()
    cy.fill_checkout_information_fields(first_name, last_name, postal_code)
    cy.get(elements.continue_check_button).should('be.visible').click()
    cy.get(elements.finish_button).should('be.visible').click()
    cy.get(elements.complete_message).should('be.visible')
    cy.url().should('include', '/checkout-complete.html');
  });
});
  