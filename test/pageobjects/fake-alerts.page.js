import Page from "./page";

class FakeAlertPage extends Page {
    get callFakeAlertButton() {
        return browser.$('#fakealert')
    }

    get callModalDialogButton() {
        return browser.$('#modaldialog');
    }

    get dialogHeader() {
        return browser.$('#dialog-text');
    }

    get dialogOkButton() {
        return browser.$('#dialog-ok');
    }

    get dialogBackground() {
        return browser.$('.faded-background');
    }

    async callFakeAlert() {
        await this.callFakeAlertButton.click();
    }

    async callModalDialog() {
        await this.callModalDialogButton.click();
    }

    async confirmDialog() {
        await this.dialogOkButton.click();
    }

    async clickOnDialogBack() {
        await this.dialogBackground.click({x:0, y:0});
    }

    async isPageOpen() {
        return await super.isPageOpen('h1=Fake Alert Box Examples')
    }
}

export default new FakeAlertPage();