import MainPage from "../pageobjects/main.page";
import CSSizePage from "../pageobjects/css-size.page";

describe('CSS Media Size page', () => {
    it('should dynamically change depending on the size of the window', async () => {
        await MainPage.openCSSSizePage();
        expect(await CSSizePage.isPageOpen()).toBe(true);
        await browser.setWindowSize(1400, 1200);
        let height = 1200;
        await expect(CSSizePage.width1400).toBeDisplayed();
        await browser.setWindowSize(1399, height);
        await expect(CSSizePage.width1400).not.toBeDisplayed();
        await expect(CSSizePage.width1000).toBeDisplayed();
        await browser.setWindowSize(999, height);
        await expect(CSSizePage.width1000).not.toBeDisplayed();
    })
})