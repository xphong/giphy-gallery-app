describe('Service: GiphyService', function () {

  beforeEach(module('giphyGalleryApp'));

  var GiphyService,
      $httpBackend,
      giphyServiceData;

  giphyServiceData = [{'some': 'test data'}];

  beforeEach(inject(function(_$httpBackend_, _GiphyService_) {
      $httpBackend = _$httpBackend_;
      GiphyService = _GiphyService_;
  }));

  afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
  });

  it('should retrieve correct data for giphy service', function () {
    $httpBackend.whenGET('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&rating=g')
      .respond(giphyServiceData);

    GiphyService.getGiphyData()
      .then(function (response) {
          expect(response.data).toEqual(giphyServiceData);
      });

    $httpBackend.flush();
  });

});
