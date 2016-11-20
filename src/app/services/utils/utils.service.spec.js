describe('Service: Utils', function () {

  beforeEach(module('giphyGalleryApp'));

  var UtilsService;

  beforeEach(inject(function(_$httpBackend_, _UtilsService_) {
    UtilsService = _UtilsService_;
  }));

  describe('formatDate', function () {
    it('should format date to YYYY/MM/DD', function () {
      expect(UtilsService.formatDate(new Date('2015-03-21 10:08:28'))).toEqual('2015/3/21');
      expect(UtilsService.formatDate(new Date('1995-12-17T19:24:00'))).toEqual('1995/12/17');
    });
  });

});
