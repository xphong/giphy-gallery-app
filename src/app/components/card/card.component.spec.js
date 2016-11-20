describe('Component: Card', function () {
    var $compile,
        $rootScope,
        $scope,
        $httpBackend,
        element,
        isolateScope;

    beforeEach(module('giphyGalleryApp'));

    beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
      var data = []

      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();

      $scope.data = data;
      
      element = compile('<gg-card class="img-thumbnail" data="data"></gg-card>')(scope);

      scope.$digest();
      isolateScope = element.isolateScope();
    }));

    it ('should exist', function () {
      expect(element).toBeDefined();
    });

});
