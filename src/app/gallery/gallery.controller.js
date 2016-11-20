(function (angular) {
    'use strict';

    angular
      .module('giphyGalleryApp')
      .controller('GalleryCtrl', GalleryCtrl);

    GalleryCtrl.$inject = ['GiphyService'];

    function GalleryCtrl (GiphyService) {
      var vm = this;

      vm.data = {};
      vm.errorMessage = '';
      vm.currentDate = formatDate(new Date());

      activate();

      function activate () {
        GiphyService.getGiphyData()
          .then(setGalleryData, handleGalleryDataError);
      }

      function setGalleryData (response) {
        if (response) {
          vm.data = response.data;
        }
      }

      function handleGalleryDataError (error) {
        // Hard coded because of CORS
        vm.errorMessage = 'Error loading data';
      }

      function formatDate (date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();

        return year + "/" + month + "/" + day;
      }
    }

})(angular);
