class SearchWindow {
  // constructor(){
  //     this.searchInput = async function(){await $('form.DocSearch-Form input')},
  //     this.firstSearchOutput = async function(){await $('#docsearch-item-0 span.DocSearch-Hit-title')}
  // }
  get searchInput() {
    return $('form.DocSearch-Form input');
  }
  get firstSearchOutput() {
    return $('#docsearch-item-0 span.DocSearch-Hit-title');
  }
  async enterSearchInput(input) {
    await this.searchInput.waitForEnabled();
    await this.searchInput.setValue(input);
  }
}
const searchWindow = new SearchWindow();

export {searchWindow};
