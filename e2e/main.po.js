protractor.pages = protractor.pages || {};

protractor.pages.MainPage = function () {
    var protractor = require('protractor');

    // App Page
    this.navBar = element(by.css('.navbar-default'));
    this.footer = element(by.tagName('footer'));

    // Gallery Page
    this.jumbrotronTitle = element(by.css('.jumbotron h2'));

    this.getPage = function (page) {
        browser.ignoreSynchronization = true;
        browser.get(browser.baseUrl + '/#' + page);
        browser.waitForAngular();
    };

    this.getUrl = function () {
        return browser.driver.getCurrentUrl();
    };

    this.getCurrentDateFormatted = function () {
      var date = new Date();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var year = date.getFullYear();

      return year + "/" + month + "/" + day;
    }

    this.waitForGiphyDataToLoad = function () {
      browser.wait(function () {
        return browser.driver.isElementPresent(by.css('.gallery__images__container'));
      }, 5000);
    }
};
