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
      vm.currentDate = getCurrentDate();

      init();

      vm.likeGiphy = likeGiphy;

      function init () {
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

      function getCurrentDate () {
        var dateObj = new Date();
        var month = dateObj.getMonth() + 1;
        var day = dateObj.getDate();
        var year = dateObj.getFullYear();

        return year + "/" + month + "/" + day;
      }

      function likeGiphy (index) {
        if (!vm.data.data[index].likeCount) {
          vm.data.data[index].likeCount = 0;
          vm.data.data[index].likeCount += 1;
        } else {
          vm.data.data[index].likeCount += 1;
        }
      }
    }

})(angular);
