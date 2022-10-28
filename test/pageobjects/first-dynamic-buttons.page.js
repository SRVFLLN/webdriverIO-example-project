import Page from "./page";
import Waitings from "./waitings";

class FirstDynamicButtonsPage extends Page {
    async isPageOpen() {
        return await super.isPageOpen('h1=Simple Dynamic Buttons');
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
        Waitings.waitForDisplayed(this.buttonSelector(index));
        await this.buttonSelector(index).click();
    }
}

export default new FirstDynamicButtonsPage();