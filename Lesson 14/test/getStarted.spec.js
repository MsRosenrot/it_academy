import { expect } from 'chai';

describe('Check that user is able to navigate to Get started page', async () => {
  let getStartedButton;

  before(async () => {
    await browser.url('https://webdriver.io/');
    getStartedButton = await $('div.buttons_pzbO a:first-child');
  });

  it('Check that Get Started page header is correct', async () => {
    await getStartedButton.waitForEnabled();
    await getStartedButton.click();
    await $('h1').waitForDisplayed();
    expect(String(await $('h1').getText()).toLowerCase()).to.equal('getting started');
  });
});
