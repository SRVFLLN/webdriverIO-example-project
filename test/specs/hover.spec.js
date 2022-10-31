import MainPage from '../pageobjects/main.page';
import HoverPage from '../pageobjects/hover.page';

describe('Hover page', () => {
    beforeEach(async () => {
        await MainPage.openHoverPage();
        expect(await HoverPage.isPageOpen()).toBe(true);
    })

    it('should contains text which visible after hover on paragraph', async () => {
        await HoverPage.hoverOnParagraph();
        await expect(HoverPage.textUnderHover).toBeDisplayed();
    });

    it('should contains working link, which displayed after hover on div', async () => {
        await HoverPage.hoverOnDiv();
        await HoverPage.clickOnLink();
        await expect(browser.$('h1')).toHaveText('Action Complete');
    })
})