import MainPage from '../pageobjects/main.page';
import FramesPage from '../pageobjects/frames.page';

describe('Frames page', () => {
    beforeEach(async () => {
        await MainPage.openFramesPage();
        expect(await FramesPage.isPageOpen()).toBe(true);
    });

    it('should contains frame with element with expected id', async () => {
        await browser.switchToFrame(await FramesPage.listFrame);
        await expect(FramesPage.frameListElement).toHaveAttr('id', 'iframe40');
    })

    it('should contains with working link which leading to main page', async () => {
        await browser.switchToFrame(await FramesPage.linkFrame);
        await FramesPage.clickOnLinkInsideFrame();
        await browser.switchToParentFrame();
        expect(await MainPage.isPageOpen()).toBe(true);
    })
})