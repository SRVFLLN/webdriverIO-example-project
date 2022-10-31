import MainPage from '../pageobjects/main.page';
import EventsPage from '../pageobjects/events.page';

describe('Events page', () => {
    beforeEach(async () => {
        await MainPage.openEventsPage();
        expect(await EventsPage.isPageOpen()).toBe(true);
    });

    it('should trigger blur event', async () => {
        await EventsPage.triggerBlur();
        await expect(EventsPage.blurTriggerStatus).toHaveText('Event Triggered');
    });

    it('should trigger click event', async () => {
        await EventsPage.triggerClick();
        await expect(EventsPage.clickTriggerStatus).toHaveText('Event Triggered');
    });

    it('should trigger contextMenu event', async () => {
        await EventsPage.triggerContext();
        await expect(EventsPage.contextTriggerStatus).toHaveText('Event Triggered');
    });

    it('should trigger double click event', async () => {
        await EventsPage.triggerDoubleClick();
        await expect(EventsPage.dbClickTriggerStatus).toHaveText('Event Triggered');
    });

    it('should trigger focus event', async () => {
        await EventsPage.triggerFocus();
        await expect(EventsPage.focusTriggerStatus).toHaveText('Event Triggered');
    });

    it('should trigger key down event', async () => {
        await EventsPage.triggerKeyDown();
        await expect(EventsPage.keyDownTriggerStatus).toHaveText('Event Triggered');
    });

    it('should trigger key up event', async () => {
        await EventsPage.triggerKeyUp();
        await expect(EventsPage.keyUpTriggerStatus).toHaveText('Event Triggered');
    });

    it('should trigger key press event', async () => {
        await EventsPage.triggerKeyPress();
        await expect(EventsPage.keyPressTriggerStatus).toHaveText('Event Triggered');
    });

    it('should trigger mouse over event', async () => {
        await EventsPage.triggerMouseOver();
        await expect(EventsPage.mouseOverTriggerStatus).toHaveText('Event Triggered');
    });

    it('should trigger mouse leave event', async () => {
        await EventsPage.triggerMouseLeave();
        await expect(EventsPage.mouseLeaveTriggerStatus).toHaveText('Event Triggered');
    });

    it('should trigger mouse down event', async () => {
        await EventsPage.triggerMouseDown();
        await expect(EventsPage.mouseDownTriggerStatus).toHaveText('Event Triggered');
    });
})