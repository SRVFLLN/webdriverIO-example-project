import MainPage from "../pageobjects/main.page";
import BasicAjaxPage from "../pageobjects/basic-ajax.page";
import Waitings from "../pageobjects/waitings";

describe('Basic ajax page', () => {
    it('should change dynamically after an ajax call is triggered', async () => {
        await MainPage.openBasicAjaxPage();
        expect(await BasicAjaxPage.isPageOpen()).toBe(true);
        await expect(BasicAjaxPage.desktopOption).not.toBeExisting();
        await BasicAjaxPage.selectCategory();
        await expect(BasicAjaxPage.loadImg).toBeDisplayed();
        await Waitings.waitForNotDisplayed(BasicAjaxPage.loadImg);
        await expect(BasicAjaxPage.desktopOption).toBeExisting();
        await BasicAjaxPage.selectLanguage();
        await BasicAjaxPage.submit();
        await expect(browser.$('h1')).toHaveText('Processed Form Details');
    })
})