'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /video_list when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/video_list");
  });


  describe('video_list', function() {

    beforeEach(function() {
      browser.get('index.html#/video_list');
    });


    it('should render video_list when user navigates to /video_list', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for video_list/);
    });

  });


  describe('video', function() {

    beforeEach(function() {
      browser.get('index.html#/video');
    });


    it('should render video when user navigates to /video', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for video/);
    });

  });
});
