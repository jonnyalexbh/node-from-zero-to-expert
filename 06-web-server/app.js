const http = require('http');

http.createServer((req, res) => {
  res.write('hello');
  res.end();
})
  .listen(8080);

console.log('listening the port 8080');
