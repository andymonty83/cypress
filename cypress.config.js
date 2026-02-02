const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //incognito mode
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' || browser.family === 'chromium') {
          launchOptions.args.push('--incognito');
        }
        return launchOptions;
      });
    },
  },
});


// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

// npm install cypress --save-dev 

// npx cypress open
