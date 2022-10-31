import Page from "./page";
import Waitings from "./waitings";

class FirstDynamicButtonsPage extends Page {
    async isPageOpen() {
        return await super.isPageOpen('h1=Disabled Dynamic Buttons');
    }

    buttonSelector(index) {
        return browser.$(`#button0${index}`);
    }

    get waitMessage() {
        return browser.$('#waitmessage');
    }

    get buttonMessage() {
        return browser.$('#buttonmessage');
    }

    async clickOnButton(index) {
        await this.buttonSelector(index).waitForEnabled();
        await this.buttonSelector(index).click();
    }

    async getButtonCount() {
        await browser.$('button=start').waitForExist();
        return await browser.$$('button').length;
    }
}

export default new FirstDynamicButtonsPage();