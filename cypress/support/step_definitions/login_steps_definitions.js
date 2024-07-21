import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const LoginPage = require("../../pages/login_page")

const login_page = new LoginPage

Given("access login page", () => {
    login_page.visit();
});

// 1
When("Enter the username into the field using {string}", (username) => {
    login_page.enter_username(username)
});
When("Enter the password into the field using {string}", (password) => {
    login_page.enter_password(password)
});
When("Click on the login button", () => {
    login_page.submit()
});
Then("Should display the site's homepage with the correct URL.", () => {
    login_page.valid_url_is_correct('/inventory')
});

// 2
When("Input the {string} into the username field", (username) => {
    login_page.enter_username(username)
});
When("Input the {string} into the password field", (password) => {
    login_page.enter_password(password)
});
When("I click the Login button", () => {
    login_page.submit()
});
Then("Should show error message {string}.", (expected_result) => {
    login_page.error_message(expected_result)
});

// 3
When("Populate the username field with the value {string}", (username) => {
    login_page.enter_username(username)
});
When("Populate the password field with the value {string}", (password) => {
    login_page.enter_password(password)
});
When("Press the login button.", () => {
    login_page.submit()
});
Then("The site’s home page should be displayed with the correct URL.", () => {
    login_page.valid_url_is_correct('/inventory')
});

// 4
When("Enter the username field with {string}", (username) => {
    login_page.enter_username(username)
});
When("Enter the password field with {string}", (password) => {
    login_page.enter_password(password)
});
When("Hit the login button.", () => {
    login_page.submit()
});
Then("Site home page should display with the correct URL.", () => {
    login_page.valid_url_is_correct('/inventory')
});

// 5
When("Enter and clear the password field with {string}.", (password) => {
    login_page.enter_password(password)
});
When("Press the login button", () => {
    login_page.submit()
});
Then("The login should fail, and an {string} error should be displayed", (expected_result) => {
    login_page.error_message(expected_result)
});

// 6
When("When Enter and clear the username field with {string}.", (username) => {
    login_page.enter_username(username)
});
When("Press a login button.", () => {
    login_page.submit()
});
Then("The login should fail, and an {string} error should be displayed.", (expected_result) => {
    login_page.error_message(expected_result)
});

// 7
When("Enter and clear the username field with {string}.", (username) => {
    login_page.enter_username(username)
});
When("Enter and clear the password field with {string}", (password) => {
    login_page.enter_password(password)
});
When("Press login button", () => {
    login_page.submit()
});
Then("login should fail, and an this message: {string} error should be shown.", (expected_result) => {
    login_page.error_message(expected_result)
});

// 8
When("Enter and clear the username field with {string}", (username) => {
    login_page.enter_username(username)
});
When("Enter and clear the password field With {string}", (password) => {
    login_page.enter_password(password)
});
When("Press a Login button", () => {
    login_page.submit()
});
Then("The login should fail, and an {string} error should be shown", (expected_result) => {
    login_page.error_message(expected_result)
});