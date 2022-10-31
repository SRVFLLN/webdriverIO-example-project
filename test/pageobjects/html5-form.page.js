import Page from "./page";
import * as data from "../../resources/html5-form.json";

class HTML5FormPage extends Page {
    async isPageOpen() {
        return await super.isPageOpen('h1=HTML5 Form Elements Examples');
    }

    get colourInput() {
        return browser.$('#colour-picker');
    }

    get dateInput() {
        return browser.$('#date-picker');
    }

    get localDateInput() {
        return browser.$('#date-time-picker');
    }

    get emailInput() {
        return browser.$('#email-field');
    }

    get monthInput() {
        return browser.$('#month-field');
    }

    get numberInput() {
        return browser.$('#number-field');
    }

    get submitButton() {
        return browser.$('[type="submit"]');
    }

    async fillForm() {
        await this.colourInput.fill(data.colour);
        await this.dateInput.fill(data.date);
        await this.localDateInput.fill(data.localDate);
        await this.emailInput.setValue(data.email);
        await this.monthInput.fill(data.month);
        await this.numberInput.setValue(data.number);
        await this.submitButton.waitForClickable();
        await this.submitButton.click();
    }
}

export default new HTML5FormPage();