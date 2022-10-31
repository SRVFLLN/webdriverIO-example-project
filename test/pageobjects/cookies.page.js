import Page from "./page";

class CookiesPage extends Page {
    async isPageOpen() {
        return await super.isPageOpen('h1=Cookie Controlled Admin');
    }

    get pageHeader() {
        return browser.$('h1');
    }
}

export default new CookiesPage();