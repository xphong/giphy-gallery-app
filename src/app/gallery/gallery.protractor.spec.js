describe('Gallery Page', function () {

  var page = new protractor.pages.MainPage();

  beforeEach(function () {
    page.getPage();
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('Giphy Gallery App');
  });

});
