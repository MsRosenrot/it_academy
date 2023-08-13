import { Key } from 'webdriverio';

class Header {
  get searchBar() {
    $('button.DocSearch.DocSearch-Button').waitForClickable();
    return $('button.DocSearch.DocSearch-Button');
  }

  get searchInput() {
    return $('input.DocSearch-Input');
  }

  get searchResult() {
    $('#docsearch-list').waitForExist();
    return $('#docsearch-list');
  }

  async search(query) {
    await browser.keys([Key.Ctrl, 'k']);
    await this.searchInput.waitForExist();
    await this.searchInput.setValue(query);
    await this.searchResult.waitForExist();
  }

  async clickNthResult(number) {
    await $(`#docsearch-list li:nth-child(${number})`).waitForClickable();
    await $(`#docsearch-list li:nth-child(${number})`).click();
  }
}

const header = new Header();

export { header };
