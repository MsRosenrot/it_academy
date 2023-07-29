import { expect } from 'chai';

describe('Check view customization', async () => {
  let colorBtn;
  let frenchLangBtn;
  let langMenu;

  before(async () => {
    await browser.url('https://webdriver.io/');
  });

  it('Check that user is able to change color theme', async () => {
    colorBtn = await $('button.clean-btn.toggleButton_gllP');
    await colorBtn.waitForEnabled();
    await colorBtn.click();
    expect(await colorBtn.getAttribute('title')).to.contain('currently light mode');
  });
  it('Check that user is able to change language to French', async () => {
    langMenu = await $('div.navbar__item.dropdown--hoverable.dropdown--right');
    await langMenu.waitForEnabled();
    await langMenu.click();
    frenchLangBtn = await $('//a[text() = "Français"]');
    await frenchLangBtn.waitForEnabled();
    await frenchLangBtn.click();
    expect(await $('//p[@class = "hero__subtitle"]').getText()).to.contain('Navigateur de nouvelle génération');
  });
});
