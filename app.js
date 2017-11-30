const {electron, app, BrowserWindow, Menu} = require('electron');
const path = require('path')
const url = require('url')

app.setName('Tech Talk');

let menuTemplate = [{
  label: 'Edit',
  submenu: [{
      label: 'Copy',
      accelerator: 'CmdOrCtrl+C',
      role: 'copy'
    },{
      label: 'Paste',
      accelerator: 'CmdOrCtrl+V',
      role: 'paste'
    }]
  },{
  label: 'Help',
  role: 'help',
  submenu: [{
    label: 'Learn More',
    click: function () {
      electron.shell.openExternal('http://electron.atom.io')
    }
  }]
}];
const menu = Menu.buildFromTemplate(menuTemplate)


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
  Menu.setApplicationMenu(menu) 
})

