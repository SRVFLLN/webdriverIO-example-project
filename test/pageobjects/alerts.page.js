import Page from "./page";

class AlertsPage extends Page {
    get callAlertButton() {
        return browser.$('#alertexamples');
    }

    get callConfirmButton() {
        return browser.$('#confirmexample');
    }

    get confirmAnswer() {
        return browser.$("#confirmreturn");
    }

    get confirmInfo() {
        return browser.$('#confirmexplanation');
    }

    get callPromptButton() {
        return browser.$('#promptexample');
    }

    get promptInfo() {
        return browser.$('#promptexplanation');
    }

    async isPageOpen() {
        return await super.isPageOpen('h1=Alert Box Examples');
    }

    async callAlert() {
        await this.callAlertButton.click();
    }

    async callConfirm() {
        await this.callConfirmButton.click()
    }

    async callPrompt() {
        await this.callPromptButton.click();
    }
}

export default new AlertsPage();