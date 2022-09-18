const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rc9gaf',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
