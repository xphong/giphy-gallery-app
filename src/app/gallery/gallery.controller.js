(function (angular) {
    'use strict';

    angular
      .module('giphyGalleryApp')
      .controller('GalleryCtrl', GalleryCtrl);

    GalleryCtrl.$inject = ['GiphyService', 'UtilsService'];

    function GalleryCtrl (GiphyService, UtilsService) {
      var vm = this;

      vm.data = {};
      vm.errorMessage = '';
      vm.currentDate = UtilsService.formatDate(new Date());

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
    }

})(angular);
