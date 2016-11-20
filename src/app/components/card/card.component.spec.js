describe('Component: Card', function () {
    var $compile,
        $rootScope,
        $scope,
        $httpBackend,
        element,
        isolateScope;

    beforeEach(module('giphyGalleryApp'));

    beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
      var data = [{
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

      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();

      $scope.data = data;
      
      element = $compile('<gg-card class="img-thumbnail" data="data"></gg-card>')($scope);

      $scope.$digest();
      isolateScope = element.isolateScope();
    }));

    it('should exist', function () {
      expect(element).toBeDefined();
    });

    it('should increase like count when likeGiphy function is called', function () {
      expect(isolateScope.vm.data.likeCount).toBeUndefined();
      isolateScope.vm.likeGiphy(0);
      expect(isolateScope.vm.data.likeCount).toBe(1);
      isolateScope.vm.likeGiphy(0);
      expect(isolateScope.vm.data.likeCount).toBe(2);
    });

    it('should format date string to YYYY/MM/DD', function () {
      expect(isolateScope.vm.formatDateString('2015-03-21 10:08:28')).toEqual('2015/3/21');
      expect(isolateScope.vm.formatDateString('2016-10-21 15:25:58')).toEqual('2016/10/21');
    });

});
