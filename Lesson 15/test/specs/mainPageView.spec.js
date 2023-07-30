import {expect} from 'chai';
import {header} from '../pageobjects/components/header.js';
import {mainPage} from '../pageobjects/mainPage.js';

describe('Check view customization', async () => {
  it('Check that user is able to change color theme', async () => {
    await mainPage.navigate('https://webdriver.io/');

    await header.clickHeaderButton(header.colorButton);
    expect(await header.colorButton.getAttribute('title')).to.contain('currently light mode');
  });

  it('Check that user is able to change language to French', async () => {
    await header.clickHeaderButton(header.languageMenuButton);
    await header.clickHeaderButton(header.frenchLanguageButton);
    expect(await mainPage.mainPageSubtitle.getText()).to.contain('Navigateur de nouvelle génération');
  });
});
