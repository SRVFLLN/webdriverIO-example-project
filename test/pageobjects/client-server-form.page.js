import Page from "./page";

class ClientServerFormPage extends Page {
    async isPageOpen() {
        return await super.isPageOpen('h1=Input Validation Examples')
    }

    get firstnameValue() {
        return browser.$('#firstname-value');
    }

    get surnameValue() {
        return browser.$('#surname-value');
    }

    get ageValue() {
        return browser.$('#age-value');
    }

    get countryValue() {
        return browser.$('#country-value');
    }

    get notesValue() {
        return browser.$('#notes-value');
    }
}

export default new ClientServerFormPage();