import { expect } from 'chai';

describe('Check header features', async () => {
  let searchField;
  let searchInput;
  let firstSearchOutput;
  const navBarTabs = [];

  before(async () => {
    await browser.url('https://webdriver.io/');
  });

  it('Check that nav bar tabs are "Docs, API, Blog, Contribute, Community, Sponsor"', async () => {
    await $$('div.navbar__inner div:nth-child(-n+1) a.navbar__item.navbar__link').forEach(async (element) => {
      navBarTabs.push(String(await element.getText()).toLowerCase());
    });
    expect(navBarTabs).to.have.members(['docs', 'api', 'blog', 'contribute', 'community', 'sponsor']);
  });

  it('Check searching "Hooks" request: first output contains word Hooks', async () => {
    searchField = await $('span.DocSearch-Button-Container');
    await searchField.waitForEnabled();
    await searchField.click();
    searchInput = await $('form.DocSearch-Form input');
    await searchInput.waitForEnabled();
    await searchInput.setValue('Hooks');
    firstSearchOutput = await $('#docsearch-item-0 span.DocSearch-Hit-title');
    await firstSearchOutput.waitForEnabled();
    expect(await firstSearchOutput.getText()).to.equal('Hooks')
  });
});
