import CookiesPage from '../pageobjects/cookies.page';
import MainPage from '../pageobjects/main.page';

describe('Cookies page', () => {
    it('should set cookie', async () => {
        await MainPage.openCookiesPage();
        expect(await CookiesPage.isPageOpen()).toBe(true);
        expect((await browser.getAllCookies()).length).toEqual(0);
        await browser.setCookies({name: 'loggedin', value: 'Admin'});
        await CookiesPage.reload();
        expect((await browser.getCookies('loggedin'))[0]).toHaveProperty('value', 'Admin');
        await expect(CookiesPage.pageHeader).toHaveText('Admin View');
    })
})