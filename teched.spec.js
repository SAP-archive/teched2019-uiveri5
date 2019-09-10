require('./pages/home');
require('./pages/product');

describe("teched", function () {
  var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
	it("should validate the home screen", function () {
        // Assertions
		Then.onTheHomePage.iShouldSeeAllCategories();
	});

	it("Should search for a product", function () {
		// Actions
		When.onTheHomePage.iSearchForProduct();

        	// Assertions
		Then.onTheHomePage.theProductListShouldBeFiltered();
	});

	it("Should navigate to the product", function () {
		// Actions
		When.onTheHomePage.iSelectTheFirstProduct();

        // Assertions
		Then.onTheProductPage.theProductTitleIsShown();
		Then.onTheProductPage.theProductCouldBeOrdered();
	});
});
