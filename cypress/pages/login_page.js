const elements = require("../support/elements")

class LoginPage {
    visit(){
        cy.visit('https://www.saucedemo.com/v1');
    }
    enter_username(username) {
        cy.get(elements.user_name_input).type(username);
    }
    enter_password(password) {
        cy.get(elements.password_input).type(password);
    }
    submit() {
         cy.get(elements.login_btn).click();
    }

    valid_url_is_correct(url){
        cy.url().should('include', url)
    }

    error_message(message) {
        return cy.get(elements.error_message).should('be.visible').and('contain.text', message)
    }
}
export default LoginPage;
  