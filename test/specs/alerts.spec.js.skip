import AlertsPage from '../pageobjects/alerts.page';
import MainPage from '../pageobjects/main.page';

describe('Alerts page', () => {
    beforeEach(async () => {
        await MainPage.openAlertPage();
        expect(await AlertsPage.isPageOpen()).toBe(true);
    });

    it('should open alert with expected text', async ()=> {
        await AlertsPage.callAlert();
        expect(await browser.getAlertText()).toContain('I am an alert box!');
        await browser.acceptAlert();
    })

    it('should open confirm which can correct handle answer', async () => {
        await AlertsPage.callConfirm();
        expect(await browser.getAlertText()).toContain('I am a confirm alert');
        await browser.dismissAlert();
        await expect(AlertsPage.confirmAnswer).toHaveText('false');
        await expect(AlertsPage.confirmInfo).toHaveTextContaining('You clicked Cancel');
    });

    it('should open prompt and correctly handle typed text', async () => {
        await AlertsPage.callPrompt();
        expect(await browser.getAlertText()).toContain('I prompt you');
        let string = (Math.random() + 1).toString(36).substring(7);
        await browser.sendAlertText(string);
        await browser.acceptAlert();
        await expect(AlertsPage.promptInfo).toHaveTextContaining(string);
    })
})