export default class Watings {
    static defaultTimeout = 10000;

    static async waitUntilPageIsLoad() {
        await browser.waitUntil(
            async () => await browser.execute(() => document.readyState === 'complete'), { timeout: this.defaultTimeout});
    }

    static async waitForClickable(element, timeout) {
        await element.waitForClickable({timeout: timeout ? timeout : this.defaultTimeout});
    }

    static async waitForDisplayed(element, timeout) {
        await element.waitForDisplayed({timeout: timeout ? timeout : this.defaultTimeout});
    }

    static async waitForNotDisplayed(element, timeout) {
        await element.waitForDisplayed({timeout: timeout ? timeout : this.defaultTimeout, reverse: true});
    }

    static async waitForExist(element, timeout) {
        await element.waitForExist({timeout: timeout ? timeout : this.defaultTimeout})
    }
}
