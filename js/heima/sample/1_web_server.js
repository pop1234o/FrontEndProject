var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log('req come'+req.url);
  
  res.write('<h1>welcome</h1> '+req.url);
  res.end();
}).listen(8080);











