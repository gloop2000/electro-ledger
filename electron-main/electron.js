const { BrowserWindow } = require("electron");
const path = require("path");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    process.env.NODE_ENV === "production"
      ? `file://${path.join(__dirname, "../build/index.html")}`
      : "http://localhost:3005"
  );
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    app.quit();
  });

  return mainWindow;
}

module.exports = { createMainWindow };
