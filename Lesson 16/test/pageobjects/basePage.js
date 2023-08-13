class BasePage {
  get pageTitle() {
    return $('h1');
  }

  async navigate(url) {
    await browser.url(url);
    await browser.execute(() => document.readyState === 'complete');
  }

  async clickPageButton(button) {
    await button.waitForEnabled();
    await button.click();
  }
}
export { BasePage };
