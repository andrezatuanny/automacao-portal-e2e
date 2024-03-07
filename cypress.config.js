const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    ...process.env,
  },
  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
