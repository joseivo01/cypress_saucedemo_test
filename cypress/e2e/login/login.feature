Feature: Login

  Background:
    Given access login page

  ## 1
  Scenario: logs in successfully with user standard
    When Enter the username into the field using 'standard_user'
    When Enter the password into the field using 'secret_sauce'
    When Click on the login button
    Then Should display the site's homepage with the correct URL.

  # ## 2 -- it test works too
  # @only
  # Scenario: try login with user blocked user
  #   When Input the 'locked_out_user' into the username field
  #   | email                 | validpassword |
  #   | qatubenew@yopmail.com | 12345         |
  #   When Input the 'secret_sauce' into the password field
  #   When Click the login button
  #   Then Should show the site’s home page with the correct URL.

  ## 2
  Scenario Outline: try login with user blocked user
    When Input the '<username>' into the username field
    When Input the '<password>' into the password field
    When I click the Login button
    Then Should show error message '<expected_result>'.
    Examples:
    | username          | password      | expected_result                       |
    | locked_out_user   | secret_sauce  | Sorry, this user has been locked out. |
    
  ## 3
  Scenario: logs in successfully with user problem_user
    When Populate the username field with the value 'problem_user'
    When Populate the password field with the value 'secret_sauce' 
    When Press the login button
    Then The site’s home page should be displayed with the correct URL.

  ## 4
  Scenario: logs in successfully with user performance_glitch_user
    When Enter the username field with 'performance_glitch_user'
    When Enter the password field with 'secret_sauce' 
    When Hit the login button.
    Then Site home page should display with the correct URL.

  ## 5
  Scenario: fails to log in with blank credentials on username field
    When Enter and clear the password field with 'secret_sauce'.
    When Press the login button
    Then The login should fail, and an "Username is required" error should be displayed

  ## 6
  Scenario: fails to log in with blank credentials on password field
    When When Enter and clear the username field with 'standard_user'.
    When Press a login button.
    Then The login should fail, and an "Password is required" error should be displayed.

  ## 7
  Scenario: fails to log in with blank Spacekey credentials on username field
    When Enter and clear the username field with '   '.
    When Enter and clear the password field with 'secret_sauce'
    When Press the login button
    Then login should fail, and an this message: "Username and password do not match any user in this service" error should be shown.

  ## 8
  Scenario: fails to log in with blank SpaceKey credentials on password field
    When Enter and clear the username field with 'standard_user'
    When Enter and clear the password field With '   '
    When Press a Login button
    Then The login should fail, and an "Username and password do not match any user in this service" error should be shown
