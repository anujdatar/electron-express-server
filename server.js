'use strict'
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const os = require('os')


// init express server
const app = express()


// app setup and middleware ***************************************************
// load view engine - pug
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
// set static or public folder
app.use(express.static(path.join(__dirname, 'static')))

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// ****************************************************************************


// start server and log server address and port *******************************
const networkInterfaces = os.networkInterfaces()
const networkIp = networkInterfaces['Wi-Fi'][1]['address']
const localIp = networkInterfaces['Loopback Pseudo-Interface 1'][1]['address']
const port = 3000
const networkAddress = 'http://' +networkIp +':' +port
const localAddress = 'http://' +localIp +':' +port
const localAddress2 = 'http://localhost:' +port

app.listen(port, () => {
  console.log('Express.js server running at')
  console.log('- Local:   '+localAddress +'  or  ' +localAddress2)
  console.log('- Network: ' +networkAddress)
})
// ****************************************************************************


// set up basic request routing ***********************************************
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Electron Express Awesomeness',
    data: {
      networkIp: networkAddress,
      localIp: localAddress,
      localIp2: localAddress2,
      test: 'Hannah Bear'
    }
  })
})

app.get('/about', (req, res) => {
  res.render('about')
})
// ****************************************************************************
