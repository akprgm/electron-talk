const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path')
const url = require('url')

app.setName('Tech Talk');

function createWindow () {

  // Create the browser window.
  win = new BrowserWindow({width: 400, height: 320})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname:  path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })

  //maximize window on startup
  //win.maximize();

}


app.on('ready', createWindow)

