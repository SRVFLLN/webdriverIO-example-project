import Page from "./page";

class DragAndDropPage extends Page {
    async isPageOpen() {
        return await super.isPageOpen('h1=Drag And Drop Examples');
    }

    get firstDragElement() {
        return browser.$('#draggable1');
    }    
    
    get secondDragElement() {
        return browser.$('#draggable2');
    }    
    
    get firstDropElement() {
        return browser.$('#droppable1');
    }    
   
    get secondDropElement() {
        return browser.$('#droppable2');
    }    
    
    get eventText() {
        return browser.$('#keyeventslist > li');
    }

    async pressButton() {
        await browser.keys('Enter');
    }

    async dragFirstElement() {
        await this.firstDragElement.dragAndDrop(await this.firstDropElement);
    }

    async dragSecondElement() {
        await this.secondDragElement.dragAndDrop(await this.secondDropElement);
    }
}

export default new DragAndDropPage();