const elements = require("../../support/elements")
const users = require("../../fixtures/user_of_page")
const utils = require("../../support/utils")
const checkoutPage = require("../../pages/checkout_page")

const checkout_page = new checkoutPage

describe('Checkout Tests', () => {
  let first_name, last_name, postal_code;

  beforeEach(() => {
    checkout_page.visit(users.standard.username, users.standard.password)
    checkout_page.add_item_to_cart("Sauce Labs Backpack")
    checkout_page.go_to_cart()
    checkout_page.valid_url_is_correct('/cart.html');

    first_name = utils.generate_string('first_name');
    last_name = utils.generate_string('last_name');
    postal_code = utils.generate_string('582')
  });

  it('should remove item from cart and reflect changes when going back', () => {
    checkout_page.select_item_in_checkout("Sauce Labs Backpack")
    checkout_page.remove_item_from_checkout("Sauce Labs Backpack")
    cy.get(elements.cart_item_name("Sauce Labs Backpack")).should('not.exist')
  });

  it('should redirect to "Your Information" page when clicking "Checkout"', () => {
    checkout_page.checkout_button()
    cy.get(elements.header_infor_text).should('contain.text', 'Checkout: Your Information')
    checkout_page.valid_url_is_correct('/checkout-step-one.html');
  });

  it('should return to "Your Cart" when canceling on "Your Information" page', () => {
    checkout_page.checkout_button()
    cy.get(elements.header_infor_text).should('contain.text', 'Checkout: Your Information')
    checkout_page.cancel_button_your_information()
    checkout_page.valid_url_is_correct('/cart.html');
  });

  it('should redirect to item page when clicking on item during checkout', () => {
    checkout_page.select_item_in_checkout("Sauce Labs Backpack").click()
    checkout_page.valid_url_is_correct('/inventory-item.html');
  });

  it('should return to "Your Cart" when clicking "Back" on item page during checkout', () => {
    checkout_page.select_item_in_checkout("Sauce Labs Backpack").click()
    checkout_page.valid_url_is_correct('/inventory-item.html');
    cy.get(elements.back_button).should('be.visible').click({force:true})
    checkout_page.valid_url_is_correct('/cart.html')
  });

  it('should return to home page when canceling during checkout overview', () => {
    checkout_page.checkout_button()
    checkout_page.enter_first_name(first_name)
    checkout_page.enter_last_name(last_name)
    checkout_page.enter_postal_code(postal_code)
    checkout_page.continue_button()
    checkout_page.valid_url_is_correct('/checkout-step-two.html');
    checkout_page.cancel_button_overview()
    checkout_page.valid_url_is_correct('/inventory.html');    
  });

  it('should not advance with "First Name" field in blank', () => {
    checkout_page.checkout_button()
    checkout_page.enter_last_name(last_name)
    checkout_page.enter_postal_code(postal_code)
    checkout_page.continue_button()
    checkout_page.error_message('Error: First Name is required')
  });

  it('should not advance with "Last Name" field in blank', () => {
    checkout_page.checkout_button()
    checkout_page.enter_first_name(first_name)
    checkout_page.enter_postal_code(postal_code)
    checkout_page.continue_button()
    checkout_page.error_message('Error: Last Name is required')
  });

  it('should not advance with "Zip/Postal Code" field in blank', () => {
    checkout_page.checkout_button()
    checkout_page.enter_first_name(first_name)
    checkout_page.enter_last_name(last_name)
    checkout_page.continue_button()
    checkout_page.error_message('Error: Postal Code is required')
  });

  it('should can finished a buy a item', () => {
    checkout_page.checkout_button()
    checkout_page.enter_first_name(first_name)
    checkout_page.enter_last_name(last_name)
    checkout_page.enter_postal_code(postal_code)
    checkout_page.continue_button()
    checkout_page.finish_button()
    checkout_page.complete_message()
    checkout_page.valid_url_is_correct('/checkout-complete.html');
  });
});
  