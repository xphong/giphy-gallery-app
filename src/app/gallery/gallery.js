angular.module('giphyGalleryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('gallery', {
        url: '/gallery',
        templateUrl: 'gallery/gallery.html',
        views: {
            "main": {
                controller: 'GalleryCtrl as vm',
                templateUrl: 'gallery/gallery.tpl.html'
            }
        },
        controller: 'GalleryCtrl'
      });
  });
