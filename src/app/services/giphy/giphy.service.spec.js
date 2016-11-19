describe('Service: GiphyService', function () {

  beforeEach(module('giphyGalleryApp'));

  var GiphyService,
      $httpBackend,
      giphyServiceData,
      giphyService404Error,
      giphyService403Error;

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

   giphyService404Error = {
     'data': [],
     'meta': {
       'status': 404,
       'msg': 'Not Found',
       'response_id': '5830beae2d12a1baffbcbb1c'
     }
   };

   giphyService403Error = {
     'data': [],
     'meta': {
       'status': 403,
       'msg': 'Forbidden - missing key',
       'response_id': '5830bf1d8a4e2857cafb5fc1'
     }
   };

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

  it('should retrieve 404 error for giphy service', function () {
    $httpBackend.whenGET('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&rating=g')
      .respond(404, giphyService404Error);

    GiphyService.getGiphyData()
      .catch(function (error) {
        expect(error.status).toEqual(404);        
        expect(error.data).toEqual(giphyService404Error);
      });

    $httpBackend.flush();
  });

  it('should retrieve 403 error for giphy service', function () {
    $httpBackend.whenGET('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&rating=g')
      .respond(403, giphyService403Error);

    GiphyService.getGiphyData()
      .catch(function (error) {
        expect(error.status).toEqual(403);
        expect(error.data).toEqual(giphyService403Error);
      });

    $httpBackend.flush();
  });


});
