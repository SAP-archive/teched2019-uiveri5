require('./pages/home');
require('./pages/product');

describe("teched", function () {

	it("Should validate the home screen", function () {
        	// Assertions
		Then.onTheHomePage.theCategoryListShouldBeLoaded();
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
		Then.onTheProductPage.theProductShouldBeLoaded();
	});
});
