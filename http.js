const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
  }

  if (req.url === '/api/courses') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify([1, 2, 3]));
  }
});

server.listen(3002);
console.log('Listening on port 3002...');
