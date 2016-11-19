angular.module('giphyGalleryApp')
  .controller('GalleryCtrl', function ($scope, $http) {

    var url = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&rating=g';

    $http.get( url )
    .success(function( response ) {

      $scope.data = response;
      console.log('RESPONSE:', response );

    });

    $scope.likePhoto = function () {
      // TODO:
      // You'll need to add this method for liking not through GIPHY
      // but just locally on our site (client, don't worry about the server)
      // or, maybe you'll have a like all? or, dislike - leave that up to you

      // You'll also want to ideally create a test for each function you create
      // and test that the scope variable is correct for each or is as expected
    };

  });
