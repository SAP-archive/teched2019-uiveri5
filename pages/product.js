module.exports = createPageObjects({
    Product: {
        assertions: {
            theProductTitleIsShown: function () {
                var header = element(by.control({
                    controlType: 'sap.m.ObjectHeader',
                    bindingPath: {
                        path: "/Products('HT-6130')"
                    }
                }));
                expect(header.asControl().getProperty('title')).toBe('Flat Watch HD32');
            },

            theProductCouldBeOrdered: function() {
                var button = element(by.control({
                    controlType: 'sap.m.Button',
                    I18NText: {
                        propertyName: "text", 
                        key: "addToCartShort"
                    }
                }));
                expect(button.isDisplayed()).toBeTruthy();
            }
        }
    }
  });