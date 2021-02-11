'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /products when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/products");
  });


  describe('products', function() {

    beforeEach(function() {
      browser.get('index.html#!/products');
    });


    it('should render products when user navigates to /products', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('sidebar', function() {

    beforeEach(function() {
      browser.get('index.html#!/sidebar');
    });


    it('should render sidebar when user navigates to /sidebar', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
