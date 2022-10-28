import MainPage from '../pageobjects/main.page';
import FirstDynamicButtonsPage from '../pageobjects/first-dynamic-buttons.page';

describe('First dynamic buttons page', () => {
    it('should contains button which appears and be clickable', async () => {
        await MainPage.openFirstButtonsPage();
        expect(await FirstDynamicButtonsPage.isPageOpen()).toBe(true);
        let buttonCount = parseInt((await FirstDynamicButtonsPage.buttonMessage.getText()).replace( /^\D+/g, ''));
        for(let i = 0; i < buttonCount; i++) {
            await FirstDynamicButtonsPage.clickOnButton(i);
            if (i!=0 & i!=3) await expect(FirstDynamicButtonsPage.waitMessage).toBeDisplayed();
        }
        await expect(FirstDynamicButtonsPage.buttonMessage).toHaveText('All Buttons Clicked');
    })
})