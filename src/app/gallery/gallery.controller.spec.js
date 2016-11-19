describe('Controller: GalleryCtrl', function () {

  // load the controller's module
  beforeEach(module('giphyGalleryApp'));

  var InstagramCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&rating=g')
      .respond([{'some': 'test data'}]);

    scope = $rootScope.$new();
    InstagramCtrl = $controller('GalleryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.data.length).toBe(1);
    expect(scope.data[0].some).toBe('test data');
  });

  // TODO:
  // You will have to create some more tests here with how you should be interacting
  // with your scope variable as you create your functions in your
  // GalleryCtrl
});
