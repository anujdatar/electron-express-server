const express = require('express')
const path = require('path')


function frontendServer () {

  const myServer = express()
  // serve angular front end files from root path
  myServer.use('/', express.static('dist/electron-express-server', { redirect: false }));
  
  // rewrite virtual urls to angular app to enable refreshing of internal pages
  myServer.get('*', function (req, res, next) {
      res.sendFile(path.resolve('dist/electron-express-server/index.html'));
  });

  myServer.listen(4200, () => {
    console.log('http://localhost:4200')
  })

}

module.exports = frontendServer;
