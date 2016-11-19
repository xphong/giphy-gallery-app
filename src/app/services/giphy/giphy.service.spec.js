describe('Service: GiphyService', function () {

  beforeEach(module('giphyGalleryApp'));

  var GiphyService,
      $httpBackend,
      giphyServiceData;

  giphyServiceData = [{
    'type': 'gif',
    'id': '3o6Ztb8DOw7q6VNYw8',
    'slug': 'sharon-jones-3o6Ztb8DOw7q6VNYw8',
    'url': 'http:\/\/giphy.com\/gifs\/sharon-jones-3o6Ztb8DOw7q6VNYw8',
    'bitly_gif_url': 'http:\/\/gph.is\/2g5dJ5e',
    'bitly_url': 'http:\/\/gph.is\/2g5dJ5e',
    'embed_url': 'http:\/\/giphy.com\/embed\/3o6Ztb8DOw7q6VNYw8',
    'username': '',
    'source': '',
    'rating': 'g',
    'content_url': '',
    'source_tld': '',
    'source_post_url': '',
    'is_indexable': 0,
    'import_datetime': '2016-11-19 16:34:04',
    'trending_datetime': '2016-11-19 16:39:32',
    'images': {
      'downsized': {
        'url': 'http:\/\/media0.giphy.com\/media\/3o6Ztb8DOw7q6VNYw8\/giphy-tumblr.gif',
        'width': '250',
        'height': '186',
        'size': '1325251'
      }
     }
   }];

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
