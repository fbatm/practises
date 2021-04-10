var https = require('https')
var http = require('http')
var fs = require('fs')

const options = {
  key: fs.readFileSync('./localhost-key.pem'),
  cert: fs.readFileSync('./localhost.pem')
};
console.log(options)

http.createServer((req, res)=>{
  res.writeHead(200);
  res.end('hello http\n');
}).listen(8080, ()=>{console.log('http started at 8080')})
https.createServer(options, (req, res)=>{
  res.writeHead(200);
  res.end('hello https\n');
}).listen(4433, ()=>{console.log('https started at 4433')})