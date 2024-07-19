// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const elements = require("./elements");

Cypress.Commands.add('login_page', () => {
    cy.visit('https://www.saucedemo.com/v1');
});

Cypress.Commands.add('login', (username, password) => {
    cy.get(elements.user_name_input).type(username);
    cy.get(elements.password_input).type(password);
    cy.get(elements.login_btn).click();
});

Cypress.Commands.add('ordenar_por', (filtro) => {
    cy.get(elements.order_select_button).select(filtro);
});

Cypress.Commands.add('add_to_cart', (item_name) => {
    cy.get(elements.inventory_item_name(item_name))
    .parents(elements.inventory_itens)
    .find(elements.add_cart_home_page_button).click();
});

Cypress.Commands.add('remove_from_cart', (item_name) => {
    cy.get(elements.inventory_item_name(item_name))
    .parents(elements.inventory_itens)
    .find(elements.remove_cart_home_page_button).click();
});

Cypress.Commands.add('fill_checkout_information_fields', (first_name, last_name, postal_code) => {
    cy.get(elements.first_name_input).type(first_name)
    cy.get(elements.last_name_input).type(last_name)
    cy.get(elements.postal_code_input).type(postal_code)
});
