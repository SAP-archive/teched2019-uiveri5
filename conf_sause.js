exports.config = {
    profile: "integration",  
   
    baseUrl: "https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html",

    seleniumAddress: "https://mnaidenov:e3b3aff7-356c-470a-8413-4ee36c6ebe24@ondemand.eu-central-1.saucelabs.com:443/wd/hub",

    browsers: [{
      browserName: "edge",
      platformName: "windows",
      capabilities: {
        "platform":"Windows 10",
        "browserName":"MicrosoftEdge"
      }
    }]
}
