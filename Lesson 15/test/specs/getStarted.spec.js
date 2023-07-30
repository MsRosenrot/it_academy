import {expect} from 'chai';
import {header} from '../pageobjects/components/header.js';
import {gettingStartedPage} from '../pageobjects/gettingStartedPage.js';
import {mainPage} from '../pageobjects/mainPage.js';

describe('Check that user is able to navigate to Get started page', async () => {
  before(async ()=>{
    await mainPage.navigate('https://webdriver.io/');
    await header.clickHeaderButton(await header.getStartedButton);
  });

  it('Check that header is correct', async () => {
    await gettingStartedPage.pageTitle.waitForDisplayed();
    await expect(String(await gettingStartedPage.pageTitle.getText()).toLowerCase()).to.equal('getting started');
  });
});
