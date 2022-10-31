export default class Waitings {
    static defaultTimeout = 15000;

    static async waitUntilPageIsLoad() {
        await browser.waitUntil(
            async () => await browser.execute(() => document.readyState === 'complete'), { timeout: this.defaultTimeout});
    }

    static async waitForClickable(element, timeout = null) {
        await element.waitForClickable({timeout: timeout ? timeout : this.defaultTimeout});
    }

    static async waitForDisplayed(element, timeout = null) {
        await element.waitForDisplayed({timeout: timeout ? timeout : this.defaultTimeout});
    }

    static async waitForNotDisplayed(element, timeout = null) {
        await element.waitForDisplayed({timeout: timeout ? timeout : this.defaultTimeout, reverse: true});
    }

    static async waitForExist(element, timeout = null) {
        await element.waitForExist({timeout: timeout ? timeout : this.defaultTimeout})
    }

    static async waitForAttributeValue(element, attribute, value, timeout = null) {
        await browser.waitUntil(async () => 
            await element.getAttribute(attribute) == value, 
            {timeout: timeout ? timeout : this.defaultTimeout});
    } 
}
