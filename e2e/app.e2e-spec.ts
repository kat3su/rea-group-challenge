import { ReaChallengePage } from './app.po';

describe('rea-challenge App', () => {
  let page: ReaChallengePage;

  beforeEach(() => {
    page = new ReaChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
