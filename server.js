const http = require('http');

const server = http.createServer((req, res) => {
  //   console.log('Server running');
  console.log('Request made!');
  res.write('Hello world');
});

server.listen('3000', 'localhost', () => {
  console.log('Listening on port 3000');
});
