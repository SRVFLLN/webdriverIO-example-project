import Page from "./page";

class FramesPage extends Page {
    get listFrame() { 
        return browser.$('#thedynamichtml');
    }

    get linkFrame() { 
        return browser.$('#theheaderhtml');
    }

    get frameListElement() {
        return browser.$('li=iFrame List Item 40');
    }

    get frameLink() {
        return browser.$('a=Index');
    }

    async clickOnLinkInsideFrame() {
        await this.frameLink.click();
    }

    async isPageOpen() {
        return await super.isPageOpen('h1=iFrames Example');
    }
}

export default new FramesPage();