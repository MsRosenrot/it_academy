import {expect} from 'chai';
import {mainPage} from '../pageobjects/mainPage.js';
import {header} from '../pageobjects/components/header.js';
import {searchWindow} from '../pageobjects/components/searchWindow.js';
import {NAV_MENU_ITEMS} from '../helpers/constants.js';

describe('Check header features', async () => {
  const navBarTabs = [];

  before(async () => {
    await mainPage.navigate('https://webdriver.io/');
  });

  it(`Check that nav bar tabs are "${NAV_MENU_ITEMS.toString()}"`, async () => {
    await header.navMenuItems.forEach(async (element) => {
      navBarTabs.push(String(await element.getText()).toLowerCase());
    });
    await expect(navBarTabs).to.have.members(NAV_MENU_ITEMS);
  });

  it('Check searching "Hooks" request: first output contains word Hooks', async () => {
    await header.clickSearchField();
    await searchWindow.enterSearchInput('Hooks');

    await searchWindow.firstSearchOutput.waitForEnabled();
    await expect(await searchWindow.firstSearchOutput.getText()).to.equal('Hooks');
  });
});


