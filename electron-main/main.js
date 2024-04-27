// electron-main/main.js
const { app } = require('electron');
const { createMainWindow } = require('./electron');

app.on('ready', () => {
  const mainWindow = createMainWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});
