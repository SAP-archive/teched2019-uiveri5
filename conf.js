exports.config = {
  profile: "integration",        
  baseUrl: "https://caa380-uiveri5demo2.cfapps.eu10.hana.ondemand.com/index.html",
  auth: {
    "sapcloud-form": {
      user: "${params.user}",
      pass: "${params.pass}",
      userFieldSelector: 'input[name="username"]',
      passFieldSelector: 'input[name="password"]',
      logonButtonSelector: 'input[type="submit"]',
    }
  },
  browsers: [{
    browserName: 'chrome',
    capabilities: {
      chromedriverOptions: {
        loggingTo: ['chromedriver.log']
      },
      chromeOptions: {
          args: ['--disable-web-security',
                   '--disable-gpu',
                  '--disable-infobars',
                '--disable-dev-shm-usage']
      }
    }
    }],
      connectionConfigs: {
          direct: {
              binaries: {
                  chromedriver: {
                      version: "75.0.3770.140"
                  }
              }
          }
      }
};
