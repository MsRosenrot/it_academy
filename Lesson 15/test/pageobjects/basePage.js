class BasePage {
  async navigate(url) {
    await browser.url(url);
  }
  async clickPageButton(button) {
    await button.waitForEnabled();
    await button.click();
  }
  get pageTitle() {
    return $('h1');
  }
}

export {BasePage};
