import MainPage from '../pageobjects/main.page';
import SecondDynamicButtonsPage from '../pageobjects/second-dynamic-buttons.page';

describe('First dynamic buttons page', () => {
    it('should contains button which appears and be clickable', async () => {
        await MainPage.openSecondButtonsPage();
        expect(await SecondDynamicButtonsPage.isPageOpen()).toBe(true);
        let buttonCount = await SecondDynamicButtonsPage.getButtonCount();
        for(let i = 0; i < buttonCount; i++) {
            await SecondDynamicButtonsPage.clickOnButton(i);
            if (i!=0 & i!=3) await expect(SecondDynamicButtonsPage.waitMessage).toBeDisplayed();
        }
        await expect(SecondDynamicButtonsPage.buttonMessage).toHaveText('All Buttons Clicked');
    })
})