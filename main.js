// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const nodemon = require('nodemon')
const frontendServer = require('./frontendServer')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

const buildEnv = process.argv[2]
let mainURL
if (buildEnv === '--dev') {
  mainURL = 'http://localhost:4200/'
  console.log(mainURL)
} else {
  // mainURL = `file://${__dirname}/dist/electron-express-server/index.html`
  mainURL = 'http://localhost:8080/'
  console.log(mainURL)
}

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  // mainWindow.loadFile('./dist/index.html')
  // mainWindow.loadURL('http://localhost:3000/')
  mainWindow.loadURL(mainURL)

  // Open the DevTools at launch
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
nodemon('./expressServer.js')

// http server for ang frontend
// httpServer()
frontendServer()
