exports.config = {
    profile: "integration",        
    baseUrl: "https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html",
    browsers: [{
      browserName: 'chrome',
      capabilities: {
        chromeOptions: {
			args: ["--disable-dev-shm-usage", "--no-sandbox", "--window-size=1920,1200"]
        },
      }
    }],
	reporters: [
	  {
		  name: './reporter/screenshotReporter', 
		  screenshotsRoot: 'target/report/screenshots',
		  takeScreenshot: {
		  onExpectFailure: false,
		  onExpectSuccess: false,
		  onAction: false
		}
	  }
	],
	takeScreenshot: {
		  onExpectFailure: false,
		  onExpectSuccess: false,
		  onAction: false
		}
   /*
   auth: {
      "sapcloud-form": {
        user: "${params.user}",
        pass: "${params.pass}",
        userFieldSelector: 'input[name="username"]',
        passFieldSelector: 'input[name="password"]',
        logonButtonSelector: 'input[type="submit"]',
      }
    }
    */
};
