const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');
const { defineConfig } = require('cypress');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on('file:preprocessor', browserify.default(config));
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/**/*.feature',
    chromeWebSecurity: false,
    baseUrl: 'https://www.saucedemo.com/v1',
    supportFile: 'cypress/support/commands.js',
    stepDefinitions: [
      "cypress\e2e\**/[filepath]/**/*.{js,mjs,ts,tsx}",
      "cypress\e2e\**/[filepath].{js,mjs,ts,tsx}",
      "cypress/support/step_definitions/**/*.{js,mjs,ts,tsx}",
    ]
  },
  downloadsFolder: 'cypress/downloads',
  defaultCommandTimeout: 15000,
});
