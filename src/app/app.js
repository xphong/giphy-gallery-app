(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/gallery');
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {

    });

    app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }]);

    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('InterceptorService');
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    }]);

}(angular.module("giphyGalleryApp", [
    'angular-loading-bar',
    'templates-app',
    'templates-common',

    'ui.router.state',
    'ui.router'
])));
