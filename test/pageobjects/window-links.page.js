import Page from "./page";

class WindowLinksPage extends Page {
    async isPageOpen() {
        return await super.isPageOpen('h1=Windows Links and Examples');
    }

    get alertLink() {
        return browser.$('#goalerts')
    }

    async openAlertPageInNewTab() {
        await this.alertLink.click();
    }
}

export default new WindowLinksPage();