const elements = require("../../support/elements")
const users = require("../../fixtures/user_of_page")
const LoginPage = require("../../pages/login_page")

const login_page = new LoginPage

describe('Login tests', () => {
  beforeEach(() => {
    login_page.visit()
  })

  it('logs in successfully with user standard', () => {
    login_page.enter_username(users.standard.username)
    login_page.enter_password(users.standard.password)
    login_page.submit()
    login_page.valid_url_is_correct('/inventory')
  })
  
  it('try login with user blocked user', () => {
    login_page.enter_username(users.locked_out.username)
    login_page.enter_password(users.locked_out.password)
    login_page.submit()
    login_page.error_message('Sorry, this user has been locked out.')
  })

  it('logs in successfully with user problem_user', () => {
    login_page.enter_username(users.problem.username)
    login_page.enter_password(users.problem.password)
    login_page.submit()
    login_page.valid_url_is_correct('/inventory')
  })

  it('logs in successfully with user performance_glitch_user', () => {
    login_page.enter_username(users.performance_glitch.username)
    login_page.enter_password(users.performance_glitch.password)
    login_page.submit()
    login_page.valid_url_is_correct('/inventory')
  })
  
  it('fails to log in with blank credentials on username field', () => {
    login_page.submit()
    login_page.error_message('Username is required')
  })

  it('fails to log in with blank credentials on password field', () => {
    login_page.enter_username(users.standard.username)
    login_page.submit()
    login_page.error_message('Password is required')
  })

  it('fails to log in with blank "Spacekey" credentials on username field', () => {
    login_page.enter_username("     ")
    login_page.enter_password(users.standard.password)
    login_page.submit()
    login_page.error_message('Username and password do not match any user in this service')
  })

  it('fails to log in with blank "SpaceKey" credentials on password field', () => {
    login_page.enter_username(users.standard.username)
    login_page.enter_password("     ")
    login_page.submit()
    login_page.error_message('Username and password do not match any user in this service')
  })
})