import { expect } from 'chai';

describe('Check view customization', async () => {
  let colorButton;
  let frenchLanguageButton;
  let languageMenu;

  before(async () => {
    await browser.url('https://webdriver.io/');
  });

  it('Check that user is able to change color theme', async () => {
    colorButton = await $('button.clean-btn.toggleButton_gllP');
    await colorButton.waitForEnabled();
    await colorButton.click();
    expect(await colorButton.getAttribute('title')).to.contain('currently light mode');
  });
  it('Check that user is able to change language to French', async () => {
    languageMenu = await $('div.navbar__item.dropdown--hoverable.dropdown--right');
    await languageMenu.waitForEnabled();
    await languageMenu.click();
    frenchLanguageButton = await $('//a[text() = "Français"]');
    await frenchLanguageButton.waitForEnabled();
    await frenchLanguageButton.click();
    expect(await $('//p[@class = "hero__subtitle"]').getText()).to.contain('Navigateur de nouvelle génération');
  });
});
