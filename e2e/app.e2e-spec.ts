import { NgForaPage } from './app.po';

describe('ng-fora App', () => {
  let page: NgForaPage;

  beforeEach(() => {
    page = new NgForaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
