import { CmsPage } from './app.po';

describe('cms App', () => {
  let page: CmsPage;

  beforeEach(() => {
    page = new CmsPage();
  });

  it('should display messages saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cms works!');
  });
});
