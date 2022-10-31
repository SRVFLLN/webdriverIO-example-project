import Page from "./page";

class DownloadPage extends Page {
    async isPageOpen() {
        return await super.isPageOpen('h1=Download a File via JavaScript');
    }

    get downloadButton() {
        return browser.$('#direct-download');
    }

    async startDownload() {
        await this.downloadButton.click();
    }
}

export default new DownloadPage();