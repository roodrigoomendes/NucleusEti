const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rc9gaf",
  e2e: {
    "reporter": "mochawesome",
    "reporterOptions":{
      "reportDir":"Cypress/reporte/mochawesome-report",
      "overwrite": true,
      "html": true,
      "json": false,
      "timestamp":"mmddyyyy_HHMMss",
      reportFilename: "[name]-report",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
