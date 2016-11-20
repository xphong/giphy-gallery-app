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
      vm.likeAll = likeAll;

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

      function likeAll () {
        var likedData = angular.copy(vm.data.data);

        if (!!likedData.length) {
          likedData.map(function (data) {
            data.likeCount = data.likeCount + 1 || 1;
            return data;
          });

          vm.data.data = likedData;
        }
      }
    }

})(angular);
