const http = require('http');

const hostName = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

app.listen(port, hostName);

module.exports = app;
