import MainPage from '../pageobjects/main.page';
import FakeAlertsPage from '../pageobjects/fake-alerts.page';

describe('Fake alerts page', () => {
    beforeEach(async () => {
        await MainPage.openFakeAlertPage();
        expect(await FakeAlertsPage.isPageOpen()).toBe(true);
    })

    it('should open fake alert and close it after clicking on button', async () => {
        await FakeAlertsPage.callFakeAlert();
        await expect(FakeAlertsPage.dialogHeader).toHaveText('I am a fake alert box!');
        await FakeAlertsPage.confirmDialog();
        await expect(FakeAlertsPage.dialogBackground).not.toBeDisplayed();
    });

    it('should open modal dialog and close it after clicking on background', async () => {
        await FakeAlertsPage.callModalDialog();
        await expect(FakeAlertsPage.dialogHeader).toHaveText('I am a modal div!');
        await FakeAlertsPage.clickOnDialogBack();
        await expect(FakeAlertsPage.dialogBackground).not.toBeDisplayed();
    })
})