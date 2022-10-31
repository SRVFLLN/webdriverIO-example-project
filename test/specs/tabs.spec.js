import MainPage from "../pageobjects/main.page";
import WindowLinksPage from "../pageobjects/window-links.page";
import AlertPage from "../pageobjects/alerts.page"; 

describe('Window and links page', () => {
    it('should open another page in new tab', async () => {
        await MainPage.openWindowLinksPage();
        expect(await WindowLinksPage.isPageOpen()).toBe(true);
        const windows = async function () {return await browser.getWindowHandles()};
        expect((await windows()).length).toEqual(1);
        const mainWindow = await browser.getWindowHandle();
        await WindowLinksPage.openAlertPageInNewTab();
        expect((await windows()).length).toEqual(2);
        let length = (await windows()).length;
        await browser.switchToWindow((await windows())[length - 1]);
        expect(await AlertPage.isPageOpen()).toBe(true);
        await browser.closeWindow();
        await browser.switchToWindow(mainWindow);
        expect((await windows()).length).toEqual(1);
        expect(await WindowLinksPage.isPageOpen()).toBe(true);
    })
})