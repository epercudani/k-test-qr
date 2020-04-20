const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

var content = fs.readFileSync('index.html');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(content);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});