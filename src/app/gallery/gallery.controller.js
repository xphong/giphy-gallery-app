(function (angular) {
    'use strict';

    angular
      .module('giphyGalleryApp')
      .controller('GalleryCtrl', GalleryCtrl);

    GalleryCtrl.$inject = ['GiphyService'];

    function GalleryCtrl (GiphyService) {
      var vm = this;
      vm.data = [];
      vm.errorMessage = '';
      vm.currentDate = getCurrentDate();

      init();

      vm.likePhoto = function () {
        // TODO:
        // You'll need to add this method for liking not through GIPHY
        // but just locally on our site (client, don't worry about the server)
        // or, maybe you'll have a like all? or, dislike - leave that up to you

        // You'll also want to ideally create a test for each function you create
        // and test that the scope variable is correct for each or is as expected
      };

      function init () {
        GiphyService.getGiphyData()
          .then(setGalleryData, handleGalleryDataError);
      }

      function setGalleryData(response) {
        if (response) {
          vm.data = response.data;
          console.log('RESPONSE:', response.data );
        }
      }

      function handleGalleryDataError(error) {
        // Hard coded because of CORS
        vm.errorMessage = 'Error loading data';
      }

      function getCurrentDate() {
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1;
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        return year + "/" + month + "/" + day;
      }
    }

})(angular);
