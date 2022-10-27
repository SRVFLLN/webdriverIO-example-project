import Page from "./page";

class MainPage extends Page {
    get alertPage() {
        return browser.$('#alerttest')
    }

    get fakeAlertPage() {
        return browser.$('#fakealerttest');
    }

    async openAlertPage() {
        await this.open();
        await this.alertPage.click();
    }

    async openFakeAlertPage() {
        await this.open();
        await this.fakeAlertPage.click();
    }
}

export default new MainPage();