import MainPage from '../pageobjects/main.page';
import HTML5FormPage from '../pageobjects/html5-form.page';
import HTML5FormResultPage from '../pageobjects/html5-form-result.page';
import * as data from "../../resources/html5-form.json";

describe('HTML5 form page', () => {
    it('should correctly handle form', async () => {
        await MainPage.openHTML5FormPage();
        expect(await HTML5FormPage.isPageOpen()).toBe(true);
        await HTML5FormPage.fillForm();
        expect(await HTML5FormResultPage.isPageOpen()).toBe(true);
        await expect(HTML5FormResultPage.colorValue).toHaveText(data.colour);
        await expect(HTML5FormResultPage.dateValue).toHaveText(data.date);
        await expect(HTML5FormResultPage.localDateValue).toHaveText(data.localDate);
        await expect(HTML5FormResultPage.emailValue).toHaveText(data.email);
        await expect(HTML5FormResultPage.monthValue).toHaveText(data.month);
        await expect(HTML5FormResultPage.numberValue).toHaveText(data.number);
    })
})