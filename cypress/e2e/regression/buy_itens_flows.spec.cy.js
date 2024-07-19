const elements = require("../../support/elements")
const users = require("../../fixtures/user_of_page")
const utils = require("../../support/utils")

describe('Buy item though item page flow', () => {
  let first_name, last_name, postal_code;

  beforeEach(() => {
    first_name = utils.generate_string('first_name');
    last_name = utils.generate_string('last_name');
    postal_code = utils.generate_string('582')
  })

  it('Buy item acessing item page', () => {
    cy.login_page()
    cy.login(users.standard.username, users.standard.password)

    cy.ordenar_por('Name (A to Z)');

    cy.add_to_cart("Sauce Labs Backpack")
    cy.get(elements.my_cart_button).should('be.visible').click()
    cy.url().should('include', '/cart.html');

    cy.get(elements.checkout_button).should('be.visible').click()
    cy.get(elements.header_infor_text).should('contain.text', 'Checkout: Your Information')
    cy.fill_checkout_information_fields(first_name, last_name, postal_code)

    cy.get(elements.continue_check_button).click()
    cy.url().should('include', '/checkout-step-two.html');

    cy.get(elements.finish_button).should('be.visible').click()
    cy.get(elements.complete_message).should('be.visible')
    cy.url().should('include', '/checkout-complete.html');
  });

  it('Buy item through home page', () => {
    cy.login_page()
    cy.login(users.standard.username, users.standard.password)

    cy.ordenar_por('Name (A to Z)');

    cy.get(elements.add_cart_home_page_button).first().click()
    cy.get(elements.element_on_cart).should('contain.text', "1")
    cy.get(elements.my_cart_button).should('be.visible').click()
    cy.url().should('include', '/cart.html');

    cy.get(elements.checkout_button).should('be.visible').click()
    cy.get(elements.header_infor_text).should('contain.text', 'Checkout: Your Information')
    cy.fill_checkout_information_fields(first_name, last_name, postal_code)

    cy.get(elements.continue_check_button).first().click()
    cy.url().should('include', '/checkout-step-two.html');

    cy.get(elements.finish_button).should('be.visible').click()
    cy.get(elements.complete_message).should('be.visible')
    cy.url().should('include', '/checkout-complete.html');
  });

  it('Buy high price item home page', () => {
    cy.login_page()
    cy.login(users.standard.username, users.standard.password)

    cy.ordenar_por('Price (high to low)');

    cy.get(elements.add_cart_home_page_button).first().click()
    cy.get(elements.element_on_cart).should('contain.text', "1")
    cy.get(elements.my_cart_button).should('be.visible').click()
    cy.url().should('include', '/cart.html');

    cy.get(elements.checkout_button).should('be.visible').click()
    cy.get(elements.header_infor_text).should('contain.text', 'Checkout: Your Information')
    cy.fill_checkout_information_fields(first_name, last_name, postal_code)

    cy.get(elements.continue_check_button).click()
    cy.url().should('include', '/checkout-step-two.html');

    cy.get(elements.finish_button).should('be.visible').click()
    cy.get(elements.complete_message).should('be.visible')
    cy.url().should('include', '/checkout-complete.html');
  });

  it('Buy low price item home page', () => {
    cy.login_page()
    cy.login(users.standard.username, users.standard.password)

    cy.ordenar_por('Price (low to high)');

    cy.get(elements.add_cart_home_page_button).first().click()
    cy.get(elements.element_on_cart).should('contain.text', "1")
    cy.get(elements.my_cart_button).should('be.visible').click()
    cy.url().should('include', '/cart.html');

    cy.get(elements.checkout_button).should('be.visible').click()
    cy.get(elements.header_infor_text).should('contain.text', 'Checkout: Your Information')
    cy.fill_checkout_information_fields(first_name, last_name, postal_code)

    cy.get(elements.continue_check_button).click()
    cy.url().should('include', '/checkout-step-two.html');

    cy.get(elements.finish_button).should('be.visible').click()
    cy.get(elements.complete_message).should('be.visible')
    cy.url().should('include', '/checkout-complete.html');
  });
})