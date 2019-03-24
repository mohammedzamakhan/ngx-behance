import { browser, by, element } from 'protractor';

export class AppPage {

  getTitleText() {
    return element(by.css('app-root .navbar-brand')).getText();
  }

  getCards() {
    return element.all(by.css('.card'));
  }

  getFirstCardTitle() {
    return element.all(by.css('.card-text')).first();
  }

  getBehancveDetailsPageHeading() {
    return element(by.css('.media-body h1'));
  }
}
