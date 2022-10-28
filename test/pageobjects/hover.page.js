import Page from "./page";

class HoverPage extends Page {
    async isPageOpen() {
        return await super.isPageOpen('h1=CSS Pseudo Class - hover');
    }

    get hoverParagraph() {
        return browser.$('#hoverpara');
    }

    get textUnderHover() {
        return browser.$('#hoverparaeffect');
    }

    get hoverDiv() {
        return browser.$('#hoverdiv');
    }

    get linkUnderHover() {
        return browser.$('#hoverlink');
    }

    async hoverOnParagraph() {
        await this.hoverParagraph.moveTo();
    }

    async hoverOnDiv() {
        await this.hoverDiv.moveTo();
    }

    async clickOnLink() {
        await this.linkUnderHover.click();
    }
}

export default new HoverPage();