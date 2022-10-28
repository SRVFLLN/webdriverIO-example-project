import Page from "./page";

class MainPage extends Page {
    async isPageOpen() {
        return super.isPageOpen('h1=Test Pages For Automating');
    }

    get alertPage() {
        return browser.$('#alerttest')
    }

    get fakeAlertPage() {
        return browser.$('#fakealerttest');
    }

    get framesPage() {
        return browser.$('#iframestest')
    }

    get eventsPage() {
        return browser.$('#javascripteventbuttons');
    }

    get hoverPage() {
        return browser.$('#csspseudohover');
    }

    get firstButtonsPage() {
        return browser.$('#button01');
    }

    async open(element) {
        await super.open();
        await element.click();
    }

    async openAlertPage() {
        await this.open(this.alertPage);
    }

    async openFakeAlertPage() {
        await this.open(this.fakeAlertPage);
    }

    async openFramesPage() {
        await this.open(this.framesPage);
    }

    async openEventsPage() {
        await this.open(this.eventsPage);
    }

    async openHoverPage() {
        await this.open(this.hoverPage);
    }

    async openFirstButtonsPage() {
        await this.open(this.firstButtonsPage);
    }
}

export default new MainPage();