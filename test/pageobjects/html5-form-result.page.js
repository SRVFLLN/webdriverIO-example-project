import Page from "./page";

class HTML5FormResultsPage extends Page {
    async isPageOpen() {
        return await super.isPageOpen('h1=Processed Form Details');
    }
    get colorValue() {
        return browser.$('#_valuecolour');
    }
    
    get dateValue() {
        return browser.$('#_valuedate');
    }
    
    get localDateValue() {
        return browser.$('#_valuedatetime');
    }
    
    get emailValue() {
        return browser.$('#_valueemail');
    }
    
    get monthValue() {
        return browser.$('#_valuemonth');
    }
    
    get numberValue() {
        return browser.$('#_valuenumber');
    }
    
    get submitVaue() {
        return browser.$('#_valuesubmitbutton');
    }
}

export default new HTML5FormResultsPage();