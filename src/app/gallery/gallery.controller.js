(function (angular) {
    'use strict';

    angular
      .module('giphyGalleryApp')
      .controller('GalleryCtrl', GalleryCtrl);

    GalleryCtrl.$inject = ['GiphyService'];

    function GalleryCtrl (GiphyService) {
      var vm = this;

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
          .then(setGalleryData);
      }

      function setGalleryData(response) {
        vm.data = response.data;
        console.log('RESPONSE:', response.data );
      }
    }

})(angular);
