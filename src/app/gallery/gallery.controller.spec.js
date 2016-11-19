describe('Controller: GalleryCtrl', function () {

  beforeEach(module('giphyGalleryApp'));

  var GalleryCtrl,
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
      'fixed_width': {
        'url': 'http:\/\/media0.giphy.com\/media\/3o6Ztb8DOw7q6VNYw8\/giphy-tumblr.gif',
        'width': '200',
        'height': '186',
        'size': '1325251'
      }
     }
   }];

  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;

    GalleryCtrl = $controller('GalleryCtrl', {});
  }));

  it('should get giphy data and attach the data to the scope', function () {
    $httpBackend.whenGET('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&rating=g')
      .respond(200, giphyServiceData);
    $httpBackend.flush();

    expect(GalleryCtrl.data.length).toEqual(1);
    expect(GalleryCtrl.data[0].id).toEqual('3o6Ztb8DOw7q6VNYw8');
  });

  it('should display error message if giphy data fails to load', function () {
    $httpBackend.whenGET('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&rating=g')
      .respond(404);
    $httpBackend.flush();

    expect(GalleryCtrl.data.length).toEqual(0);
    expect(GalleryCtrl.errorMessage).toEqual('Error loading data');
  });

  it('should display current date', function () {
    expect(GalleryCtrl.currentDate).toEqual('2016/11/19');
  });

  // TODO:
  // You will have to create some more tests here with how you should be interacting
  // with your scope variable as you create your functions in your
  // GalleryCtrl
});
