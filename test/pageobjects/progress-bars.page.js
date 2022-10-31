import Page from "./page";
import Waitings from './waitings';

class ProgressBarsPage extends Page {
    async isPageOpen() {
        return await super.isPageOpen('h1=Progress Bars');
    }

    get thirdProgressBar() {
        return browser.$('#progressbar2');
    }

    get barsStatus() {
        return browser.$('#status');
    }

    async waitForBarIsCompleted() {
        await Waitings.waitForAttributeValue(this.thirdProgressBar, 'value', '100');
    }
}

export default new ProgressBarsPage();