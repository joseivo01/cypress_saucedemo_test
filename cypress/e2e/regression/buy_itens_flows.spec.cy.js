const elements = require("../../support/elements")
const users = require("../../fixtures/user_of_page")
const utils = require("../../support/utils")

const checkoutPage = require("../../pages/checkout_page")
const itemPage = require("../../pages/item_page")

const checkout_page = new checkoutPage
const item_page = new itemPage

describe('Buy item though item page flow', () => {
  let first_name, last_name, postal_code;

  beforeEach(() => {
    first_name = utils.generate_string('first_name');
    last_name = utils.generate_string('last_name');
    postal_code = utils.generate_string('582')
  })

  it('Buy item acessing item page', () => {
    checkout_page.visit(users.standard.username, users.standard.password)

    checkout_page.sort_items('Name (A to Z)');

    checkout_page.select_item("Sauce Labs Backpack").click()
    item_page.add_item()
    checkout_page.go_to_cart()
    checkout_page.valid_url_is_correct('/cart.html');

    checkout_page.checkout_button()
    checkout_page.enter_first_name(first_name)
    checkout_page.enter_last_name(last_name)
    checkout_page.enter_postal_code(postal_code)
    
    checkout_page.continue_button()
    checkout_page.valid_url_is_correct('/checkout-step-two.html');

    checkout_page.finish_button()
    checkout_page.complete_message()
    checkout_page.valid_url_is_correct('/checkout-complete.html');
  });

  it('Buy item through home page', () => {
    checkout_page.visit(users.standard.username, users.standard.password)

    checkout_page.sort_items('Name (A to Z)');

    checkout_page.add_item_to_cart("Sauce Labs Backpack")
    checkout_page.go_to_cart()
    checkout_page.valid_url_is_correct('/cart.html');

    checkout_page.checkout_button()
    checkout_page.enter_first_name(first_name)
    checkout_page.enter_last_name(last_name)
    checkout_page.enter_postal_code(postal_code)
    
    checkout_page.continue_button()
    checkout_page.valid_url_is_correct('/checkout-step-two.html');

    checkout_page.finish_button()
    checkout_page.complete_message()
    checkout_page.valid_url_is_correct('/checkout-complete.html');
  });

  it('Buy high price item home page', () => {
    checkout_page.visit(users.standard.username, users.standard.password)

    checkout_page.sort_items('Price (high to low)');

    checkout_page.select_item("Sauce Labs Fleece Jacket")
    checkout_page.go_to_cart()
    checkout_page.valid_url_is_correct('/cart.html');

    checkout_page.checkout_button()
    checkout_page.enter_first_name(first_name)
    checkout_page.enter_last_name(last_name)
    checkout_page.enter_postal_code(postal_code)
    
    checkout_page.continue_button()
    checkout_page.valid_url_is_correct('/checkout-step-two.html');

    checkout_page.finish_button()
    checkout_page.complete_message()
    checkout_page.valid_url_is_correct('/checkout-complete.html');
  });

  it('Buy low price item home page', () => {
    checkout_page.visit(users.standard.username, users.standard.password)

    checkout_page.sort_items('Price (low to high)');

    checkout_page.select_item("Sauce Labs Onesie")
    checkout_page.go_to_cart()
    checkout_page.valid_url_is_correct('/cart.html');

    checkout_page.checkout_button()
    checkout_page.enter_first_name(first_name)
    checkout_page.enter_last_name(last_name)
    checkout_page.enter_postal_code(postal_code)
    
    checkout_page.continue_button()
    checkout_page.valid_url_is_correct('/checkout-step-two.html');

    checkout_page.finish_button()
    checkout_page.complete_message()
    checkout_page.valid_url_is_correct('/checkout-complete.html');
  });
})