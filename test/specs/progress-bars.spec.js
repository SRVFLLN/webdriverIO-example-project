import MainPage from "../pageobjects/main.page";
import ProgressBarsPage from "../pageobjects/progress-bars.page";

describe('Progress bars page', () => {
    it('should change text when all progress bars are stopped', async () => {
        await MainPage.openProgressBarsPage();
        expect(await ProgressBarsPage.isPageOpen()).toBe(true);
        await ProgressBarsPage.waitForBarIsCompleted();
        expect(ProgressBarsPage.barsStatus).toHaveText('Stopped');
    })
})