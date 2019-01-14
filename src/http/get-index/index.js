var fs = require("fs"),
  path = require("path"),
  css = fs.readFileSync(path.join(__dirname, "index.css")).toString();

exports.handler = async function index(request) {
  let html = `
  <!doctype html>
    <html>
      <head><style>${css}</style></head>
    <body>
      <div class=content><h1>Yes</h1></div>
    </body>
  </html>  
  `;
  return {
    status: 200,
    type: "text/html; charset=utf-8",
    body: html
  };
};
