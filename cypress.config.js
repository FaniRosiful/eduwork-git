// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       this.chromeWebSecurity=false;
//       // implement node event listeners here
//     },
//   },
// });
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "chromeWebSecurity":false,
    baseUrl: 'http://zero.webappsecurity.com/login.html',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
