(function (angular) {
    'use strict';

    angular
      .module('giphyGalleryApp')
      .factory('InterceptorService', InterceptorService);

    InterceptorService.$inject = ['$log', '$q'];

    function InterceptorService ($log, $q) {
        var service = {
          requestError: logError,
          responseError: logError
        };

        return service;

        function logError (error) {
            $log.error(error);
            return $q.reject(error);
        }
    }

})(angular);
