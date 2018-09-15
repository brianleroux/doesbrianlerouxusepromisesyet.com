var arc = require('@architect/functions')
var fs = require('fs')
var path = require('path')
var css = fs.readFileSync(path.join(__dirname, 'index.css')).toString()

exports.handler = arc.html.get(function index(req, res) {
  let html = `
  <!doctype html>
  <html>
  <head><style>${css}</style></head>
  <body>
  <div class=content><h1>No</h1></div>
  </body>
  </html>  
  `
  res({html})
})
