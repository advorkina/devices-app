import { DevicesAppPage } from './app.po';

describe('devices-app App', () => {
  let page: DevicesAppPage;

  beforeEach(() => {
    page = new DevicesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
