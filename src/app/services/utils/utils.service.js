(function (angular) {
    'use strict';

    angular
      .module('giphyGalleryApp')
      .factory('UtilsService', UtilsService);

    UtilsService.$inject = [];

    function UtilsService () {
      var service = {
        formatDate: formatDate
      };

      return service;

      function formatDate (date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();

        return year + "/" + month + "/" + day;
      }

    }

})(angular);
