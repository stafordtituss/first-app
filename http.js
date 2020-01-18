const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html').pipe(res);
  }

  else if (req.url === '/users') {
    var arr = [{name: 'Staford Titus S', age: 21}, {name: 'Sanford John', age: 18}]
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(arr));

  }
  else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3002);
console.log('Listening on port 3002...');
