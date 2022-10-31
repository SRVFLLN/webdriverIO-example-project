import Page from "./page";
import path from 'path';

class UploadPage extends Page {
    async isPageOpen() {
        return await super.isPageOpen('h1=Upload a File');
    }

    get fileInput() {
        return browser.$('#fileinput');
    }
    
    get sendFileButton() {
        return browser.$('[type="submit"]');
    }
    
    get fileName() {
        return browser.$('#uploadedfilename');
    }

    async sendFile() {
        await this.fileInput.setValue(path.join(path.resolve(__dirname, '../..'), 'resources/filetosend.txt'));
        await this.sendFileButton.click();
    }
}

export default new UploadPage();