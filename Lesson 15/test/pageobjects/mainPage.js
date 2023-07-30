import {BasePage} from './basePage.js';

class MainPage extends BasePage {
  get mainPageSubtitle() {
    return $('//p[@class = "hero__subtitle"]');
  }
}

const mainPage = new MainPage();
export {mainPage};
