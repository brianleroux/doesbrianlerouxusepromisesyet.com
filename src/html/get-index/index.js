var arc = require('@architect/functions')
var fs = require('fs')
var path = require('path')

var _html = fs.readFileSync(path.join(__dirname, 'index.html')).toString()
var _css = fs.readFileSync(path.join(__dirname, 'index.css')).toString()

exports.handler = arc.html.get(function index(req, res) {
  let html = `
  <!doctype html>
  <html>
  <head><style>${_css}</style></head>
  <body>${_html}</body>
  </html>  
  `
  res({html})
})
