import { MusicplayerPage } from './app.po';

describe('musicplayer App', () => {
  let page: MusicplayerPage;

  beforeEach(() => {
    page = new MusicplayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
