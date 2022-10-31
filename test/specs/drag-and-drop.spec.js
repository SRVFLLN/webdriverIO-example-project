import MainPage from "../pageobjects/main.page";
import DragAndDropPage from "../pageobjects/drag-and-drop.page";

describe('Drag and drop page', () => {
    it('', async () => {
        await MainPage.openDragNDropPage();
        expect(await DragAndDropPage.isPageOpen()).toBe(true);
        await expect(DragAndDropPage.firstDropElement).toHaveText('Drop here');
        await expect(DragAndDropPage.secondDropElement).toHaveText('No Drop here');
        await DragAndDropPage.pressButton();
        await expect(DragAndDropPage.eventText).toHaveText('down 13');
        await expect(DragAndDropPage.firstDropElement).toHaveText('Drop Here');
        await expect(DragAndDropPage.secondDropElement).toHaveText('Drop Here');
        await DragAndDropPage.dragFirstElement();
        await DragAndDropPage.dragSecondElement();
        await expect(DragAndDropPage.firstDropElement).toHaveText('Dropped!');
        await expect(DragAndDropPage.secondDropElement).toHaveText('Dropped!');
    })
})