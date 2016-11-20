describe('Gallery Page', function () {

  var page = new protractor.pages.MainPage();

  beforeEach(function () {
    page.getPage('gallery');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('Giphy Gallery App');
  });

  it('should have jumbrotron with title and current date', function () {
    expect(page.jumbrotronTitle.getText()).toBe('Trending Giphy Gallery - ' + page.getCurrentDateFormatted());
  });

  it('should display giphy data', function () {
    var imageEl;

    page.waitForGiphyDataToLoad();

    imageEl = element.all(by.css('.gallery__images__container img')).get(0);

    expect(imageEl.getAttribute('src')).toContain('giphy.com');
  });

  it('should open new window when giphy image is clicked', function () {
    var imageLink, imageUrl;

    page.waitForGiphyDataToLoad();

    imageLink = element.all(by.css('.gallery__images__container a')).get(0);
    imageUrl = imageLink.getAttribute('href');

    imageLink.click().then(function () {
      browser.getAllWindowHandles().then(function (handles) {
        newWindowHandle = handles[1];
        browser.switchTo().window(newWindowHandle).then(function () {
          expect(browser.getCurrentUrl()).toContain('giphy.com');
        });
      });
    });
  });

  it('should increase like count when clicked', function () {
    var likeContainer, likeBtn, likeCount;

    page.waitForGiphyDataToLoad();

    likeContainer = element.all(by.css('.gallery__images__likes')).get(0);
    likeBtn = likeContainer.element(by.css('.gallery__images__likes__btn'));
    likeCount = likeBtn.element(by.css('.badge'));

    likeBtn.click();
    expect(likeCount.getText()).toBe('1');
    likeBtn.click();
    expect(likeCount.getText()).toBe('2');
  });


});
