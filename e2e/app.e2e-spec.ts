import { RouterTestPage } from './app.po';

describe('router-test App', () => {
  let page: RouterTestPage;

  beforeEach(() => {
    page = new RouterTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
