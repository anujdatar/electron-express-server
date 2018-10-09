import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import os from 'os'


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
app.listen(3000, () => {
  const networkInterfaces = os.networkInterfaces()
  const networkIp = networkInterfaces['Wi-Fi'][1]['address']
  const localIp = networkInterfaces['Loopback Pseudo-Interface 1'][1]['address']
  console.log('Express.js server running at')
  console.log('- Local:   http://'+localIp +':3000/ or http://localhost:3000/')
  console.log('- Network: http://'+networkIp +':3000/')
  // console.log(os.networkInterfaces())
})
// ****************************************************************************


// set up basic request routing ***********************************************
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})
// ****************************************************************************
