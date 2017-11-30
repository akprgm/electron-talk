const {app, BrowserWindow} = require('electron');
const path = require('path')
const url = require('url')

app.setName('Tech Talk');

function createWindow () {

  // Create the browser window.
  // use show: false option to use window as thread to run in background
  win = new BrowserWindow({width: 400, height: 320})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname:  path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })

  //maximize window on startup
  //win.maximize();

}

//on window crash
// win.webContents.on('crashed', function () {
//   win.reload();    
// })


//on window hang
// win.on('unresponsive', function () {
//   win.reload();
// })


app.on('ready', createWindow)

