const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  setupNodeEvents(on, config) {
    // implement node event listeners here
  },
    downloadsFolder: 'cypress/downloads',
    defaultCommandTimeout: 15000,
    baseUrl: 'https://www.saucedemo.com/v1',
    supportFile: 'cypress/support/commands.js',
  },
});
