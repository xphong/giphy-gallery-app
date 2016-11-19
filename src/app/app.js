(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/gallery');
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {

    });

}(angular.module("giphyGalleryApp", [
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
])));
