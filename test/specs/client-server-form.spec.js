import MainPage from '../pageobjects/main.page';
import ClientServerFormPage from '../pageobjects/client-server-form.page';
import axios from 'axios';
import * as data from '../../resources/client-server-form.json';

describe('Client server form page', () => {
    it('should handle form sended by HTTP-request', async function () {
        if(browser.capabilities.browserName == 'firefox') this.skip();
        await MainPage.openClientServerFormPage();
        expect(await ClientServerFormPage.isPageOpen()).toBe(true);
        await axios({
            method: 'POST',
            url: 'https://testpages.herokuapp.com/validate/input-validation',
            data: data,
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        }).then(async (response) => {
            await browser.execute((response) => {document.open().write(response)}, response.data);
        });
        await expect(ClientServerFormPage.firstnameValue).toHaveText(data.firstname);
        await expect(ClientServerFormPage.surnameValue).toHaveText(data.surname);
        await expect(ClientServerFormPage.ageValue).toHaveText(data.age.toString());
        await expect(ClientServerFormPage.countryValue).toHaveText(data.country);
        await expect(ClientServerFormPage.notesValue).toHaveText(data.notes);
    })
})