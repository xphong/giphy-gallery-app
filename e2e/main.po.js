protractor.pages = protractor.pages || {};

protractor.pages.MainPage = function () {
    var protractor = require('protractor');

    this.getPage = function () {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:9000');
        browser.waitForAngular();
    };

    this.getUrl = function() {
        return browser.driver.getCurrentUrl();
    };

};
