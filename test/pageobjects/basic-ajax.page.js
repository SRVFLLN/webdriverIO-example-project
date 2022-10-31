import Page from "./page";

class BasicAjaxPage extends Page {
    async isPageOpen() {
        return await super.isPageOpen('h1=Basic Ajax Example');
    }

    get categorySelect() {
        return browser.$('#combo1');
    }

    get languageSelect() {
        return browser.$('#combo2');
    }

    get loadImg() {
        return browser.$('#ajaxBusy');
    }

    get submitButton() {
        return browser.$('.styled-click-button');
    }

    get desktopOption() {
        return browser.$('option[value="10"]')
    }

    async selectCategory() {
        await this.categorySelect.selectByVisibleText('Desktop');
    }

    async selectLanguage() {
        await this.languageSelect.selectByVisibleText('Assembler');
    }

    async submit() {
        await this.submitButton.click();
    }
}

export default new BasicAjaxPage();