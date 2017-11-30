const {electron, app, BrowserWindow, globalShortcut} = require('electron');
const path = require('path')
const url = require('url')

app.setName('Tech Talk');

function createWindow () {

  // Create the browser window.
  // use show: false option to use window as thread to run in background
  win = new BrowserWindow({width: 800, height: 600})

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

app.on('ready', function(){
  createWindow()

  globalShortcut.register('CommandOrControl+X', function () {
    console.log("too busy");
  })
})

