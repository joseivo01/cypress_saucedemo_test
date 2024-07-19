const elements = require("../../support/elements")
const users = require("../../fixtures/user_of_page")

describe('Login tests', () => {
  beforeEach(() => {
      cy.login_page()
  })

  it('logs in successfully with user standard', () => {
    cy.login(users.standard.username, users.standard.password)
    cy.url().should('contain', '/inventory') // assume que a página de dashboard está em /dashboard
  })
  
  it('try login with user blocked user', () => {
    cy.login(users.locked_out.username, users.locked_out.password)
    cy.get(elements.error_message).should('contain', 'Sorry, this user has been locked out.') // assume que a página de dashboard está em /dashboard
  })

  it('logs in successfully with user problem_user', () => {
    cy.login(users.problem.username, users.problem.password)
    cy.url().should('contain', '/inventory') // assume que a página de dashboard está em /dashboard
  })

  it('logs in successfully with user performance_glitch_user', () => {
    cy.login(users.performance_glitch.username, users.performance_glitch.password)
    cy.url().should('contain', '/inventory') // assume que a página de dashboard está em /dashboard
  })
  
  it('fails to log in with blank credentials on username field', () => {
    cy.get(elements.login_btn).click()
    cy.get(elements.error_message).should('be.visible')
    cy.get(elements.error_message).should('contain', 'Username is required')
  })

  it('fails to log in with blank credentials on password field', () => {
    cy.get(elements.user_name_input).type(users.problem.username);
    cy.get(elements.login_btn).click()
    cy.get(elements.error_message).should('be.visible')
    cy.get(elements.error_message).should('contain', 'Password is required')
  })

  it('fails to log in with blank "Spacekey" credentials on username field', () => {
    cy.login("      ", users.standard.password)
    cy.get(elements.error_message).should('be.visible')
    cy.get(elements.error_message).should('contain', 'Username and password do not match any user in this service')
  })

  it('fails to log in with blank "SpaceKey" credentials on password field', () => {
    cy.login(users.standard.username, "      ")
    cy.get(elements.error_message).should('be.visible')
    cy.get(elements.error_message).should('contain', 'Username and password do not match any user in this service')
  })
})