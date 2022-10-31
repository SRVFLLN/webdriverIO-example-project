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

    get secondButtonsPage() {
        return browser.$('#button02');
    }

    get clientServerFormPage() {
        return browser.$('#inputvalidation');
    }

    get cookiesPage() {
        return browser.$('#adminlogin');
    }
    
    get downloadPage() {
        return browser.$('#download');
    }

    get html5FormPage() {
        return browser.$('#html5formtest');
    }

    get uploadPage() {
        return browser.$('#fileuploadtest');
    }

    get dragNDropPage() {
        return browser.$('#useractionstest');
    }
    
    get windowLinksPage() {
        return browser.$('#windowstest');
    }

    get cssSizePage() {
        return browser.$('#cssmediasize');
    }

    get basicAjaxPage() {
        return browser.$('#basicajaxtest');
    }

    get progressBarsPage() {
        return browser.$('#progressbars');
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

    async openSecondButtonsPage() {
        await this.open(this.secondButtonsPage);
    }

    async openClientServerFormPage() {
        await this.open(this.clientServerFormPage);
    }

    async openCookiesPage() {
        await this.open(this.cookiesPage);
    }

    async openDownloadPage() {
        await this.open(this.downloadPage);
    }

    async openHTML5FormPage() {
        await this.open(this.html5FormPage);
    }

    async openUploadPage() {
        await this.open(this.uploadPage);
    }

    async openDragNDropPage() {
        await this.open(this.dragNDropPage);
    }

    async openWindowLinksPage() {
        await this.open(this.windowLinksPage);
    }

    async openCSSSizePage() {
        await this.open(this.cssSizePage);
    }

    async openBasicAjaxPage() {
        await this.open(this.basicAjaxPage);
    }

    async openProgressBarsPage() {
        await this.open(this.progressBarsPage);
    }
}

export default new MainPage();