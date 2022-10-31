import DownloadPage from '../pageobjects/download.page';
import MainPage from '../pageobjects/main.page';
const path = require('path');
const fs = require('fs');

function waitForFileExists(filePath, timeout) {
    return new Promise(function (resolve, reject) {
  
      var timer = setTimeout(function () {
        watcher.close();
        reject(new Error('File did not exists and was not created during the timeout.'));
      }, timeout);
  
      fs.access(filePath, fs.constants.R_OK, function (err) {
        if (!err) {
          clearTimeout(timer);
          watcher.close();
          resolve();
        }
      });
  
      var dir = path.dirname(filePath);
      var basename = path.basename(filePath);
      var watcher = fs.watch(dir, function (eventType, filename) {
        if (eventType === 'rename' && filename === basename) {
          clearTimeout(timer);
          watcher.close();
          resolve();
        }
      });
    });
  }

describe('Download page', () => {
    it('should start download', async () => {
        await MainPage.openDownloadPage();
        expect(await DownloadPage.isPageOpen()).toBe(true);
        await DownloadPage.startDownload();
        const filePath = path.join(global.downloadDir, 'textfile.txt');
        await browser.call(function() {
            return waitForFileExists(filePath, 10000);
        });
        const filecontent = fs.readFileSync(filePath, 'utf-8');
        expect(filecontent).toContain('This is a text file.');
    })
})