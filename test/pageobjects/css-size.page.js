import Page from "./page";

class CSSizePage extends Page {
    async isPageOpen() {
        return await super.isPageOpen('h1=CSS Media Queries Sizing');
    }

    get width1400() {
        return browser.$('.s1400')
    }

    get width1000() {
        return browser.$('.s1000');
    }
}

export default new CSSizePage();