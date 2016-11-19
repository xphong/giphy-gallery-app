(function (angular) {
    'use strict';

    angular
      .module('giphyGalleryApp')
      .factory('GiphyService', GiphyService);

    GiphyService.$inject = ['$http'];

    function GiphyService ($http) {
      var service = {
        getGiphyData: getGiphyData
      };

      return service;

      function getGiphyData () {
        var url = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&rating=g';

        return $http.get(url);
      }

    }

})(angular);
