import Page from "./page";


class EventsPage extends Page {
    async isPageOpen() {
        return await super.isPageOpen('h1=JavaScript Events');
    }

    get blurTriggerButton() { 
        return browser.$('#onblur');
    }

    get blurTriggerStatus() { 
        return browser.$('#onblurstatus');
    }

    get clickTriggerButton() { 
        return browser.$('#onclick');
    }

    get clickTriggerStatus() { 
        return browser.$('#onclickstatus');
    }

    get contextTriggerButton() { 
        return browser.$('#oncontextmenu');
    }

    get contextTriggerStatus() { 
        return browser.$('#oncontextmenustatus');
    }

    get dbClickTriggerButton() { 
        return browser.$('#ondoubleclick');
    }

    get dbClickTriggerStatus() { 
        return browser.$('#ondoubleclickstatus');
    }

    get focusTriggerButton() { 
        return browser.$('#onfocus');
    }

    get focusTriggerStatus() { 
        return browser.$('#onfocusstatus');
    }

    get keyDownTriggerButton() { 
        return browser.$('#onkeydown');
    }

    get keyDownTriggerStatus() { 
        return browser.$('#onkeydownstatus');
    }

    get keyUpTriggerButton() { 
        return browser.$('#onkeyup');
    }

    get keyUpTriggerStatus() { 
        return browser.$('#onkeyupstatus');
    }

    get keyPressTriggerButton() { 
        return browser.$('#onkeypress');
    }

    get keyPressTriggerStatus() { 
        return browser.$('#onkeypressstatus');
    }

    get mouseOverTriggerButton() { 
        return browser.$('#onmouseover');
    }

    get mouseOverTriggerStatus() { 
        return browser.$('#onmouseoverstatus');
    }

    get mouseLeaveTriggerButton() { 
        return browser.$('#onmouseleave');
    }

    get mouseLeaveTriggerStatus() { 
        return browser.$('#onmouseleavestatus');
    }

    get mouseDownTriggerButton() { 
        return browser.$('#onmousedown');
    }

    get mouseDownTriggerStatus() { 
        return browser.$('#onmousedownstatus');
    }

    async triggerBlur() {
        await this.blurTriggerButton.focus();
        await this.blurTriggerButton.blur();
    }

    async triggerClick() {
        await this.clickTriggerButton.click();
    }

    async triggerContext() {
        await this.contextTriggerButton.click({button: 'right'});
    }

    async triggerDoubleClick() {
        await this.dbClickTriggerButton.doubleClick();
    }

    async triggerFocus() {
        await this.focusTriggerButton.focus();
    }

    async triggerKeyDown() {
        await this.keyDownTriggerButton.focus();
        await browser.keys('a');
    }

    async triggerKeyUp() {
        await this.keyUpTriggerButton.focus('a');
        await browser.keys('a');
    }

    async triggerKeyPress() {
        await this.keyPressTriggerButton.focus()
        await browser.keys('a');
    }

    async triggerMouseOver() {
        await this.mouseDownTriggerButton.scrollIntoView();
        await this.mouseOverTriggerButton.moveTo();
    }

    async triggerMouseLeave() {
        await this.mouseLeaveTriggerButton.scrollIntoView()
        await this.mouseLeaveTriggerButton.moveTo();
        await this.mouseDownTriggerButton.moveTo();
    }

    async triggerMouseDown() {
        await this.mouseDownTriggerButton.click();
    }
}


export default new EventsPage();
