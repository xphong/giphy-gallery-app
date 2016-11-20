describe('App', function () {

  var page = new protractor.pages.MainPage();

  beforeEach(function () {
    page.getPage();
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('Giphy Gallery App');
  });

  it('should have a navbar', function () {
    expect(page.navBar.isPresent()).toBeTruthy();
  });

  it('should have a footer', function () {
    expect(page.footer.isPresent()).toBeTruthy();
    expect(page.footer.getText()).toBe('(c) Phong Huynh');
  });

});
